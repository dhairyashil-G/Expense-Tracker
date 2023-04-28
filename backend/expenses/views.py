from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializer import CreateExepenseSerializer, ListExpensesSerializer
from rest_framework import generics
from .models import Expenses
import plotly
import plotly.graph_objects as go
import pandas as pd
import itertools
from rest_framework.response import Response
from django.db.models import Sum
from django.db.models.functions import ExtractMonth
from datetime import datetime

# Create your views here.


class AddExpenseView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CreateExepenseSerializer


class ShowExpensesView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ListExpensesSerializer

    def get_queryset(self):
        user = self.request.user
        return Expenses.objects.filter(user=user)
        # return Expenses.objects.filter(user=3)


@api_view(['GET', ])
@permission_classes([IsAuthenticated])
def DashboardView(request):
    user = request.user
    limit = user.limit
    expenses = Expenses.objects.filter(user=user).values()
    # expenses = Expenses.objects.filter(user=3).values()
    df = pd.DataFrame.from_records(expenses)

    # Create a bar chart of total expenses by category
    category_totals = expenses.values('category').annotate(total=Sum('amount'))
    bar_chart = go.Bar(x=[x['category'] for x in category_totals], y=[
                       x['total'] for x in category_totals])
    bar_layout = go.Layout(title='Total Expenses by Category')
    bar_fig = go.Figure(data=[bar_chart], layout=bar_layout)
    bar_fig_JSON = plotly.io.to_json(bar_fig)

    # Create a line chart of expenses over time
    time_series = expenses.annotate(month=ExtractMonth('date')).values(
    'month').annotate(total=Sum('amount'))
    all_time_series = time_series
    line_charts = []
    for category in expenses.values_list('category', flat=True).distinct():
        filtered_expenses = expenses.filter(category=category)
        time_series = filtered_expenses.annotate(month=ExtractMonth('date')).values(
            'month').annotate(total=Sum('amount'))
        line_chart = go.Scatter(x=[x['month'] for x in time_series], y=[
                                x['total'] for x in time_series], name=category)
        line_charts.append(line_chart)
    limit_y = [request.user.limit] * len(all_time_series)
    limit_line = go.Scatter(x=[min([x['month'] for x in all_time_series]), max([x['month'] for x in all_time_series])],
                            y=limit_y, mode='lines', name='Monthly Limit')
    line_layout = go.Layout(title='Expenses Over Time')
    line_fig = go.Figure(data=[*line_charts, limit_line], layout=line_layout)
    line_fig_JSON = plotly.io.to_json(line_fig)

    
    # Create a pie chart of current month expenses by category
    current_month_expenses = expenses.filter(date__month=datetime.now().month)
    category_proportions = current_month_expenses.values(
        'category').annotate(total=Sum('amount'))
    remaining_limit = request.user.limit - \
        sum([x['total'] for x in category_proportions])
    labels = [x['category'] for x in category_proportions] + ['Remaining']
    values = [x['total'] for x in category_proportions] + [remaining_limit]
    pie_chart = go.Pie(labels=labels, values=values)
    pie_layout = go.Layout(title='Current Month\'s Expenses')
    pie_fig = go.Figure(data=[pie_chart], layout=pie_layout)
    pie_fig_json = plotly.io.to_json(pie_fig)

    content = {
        'df': df,
        'bar_fig': bar_fig_JSON,
        'line_fig': line_fig_JSON,
        'pie_fig': pie_fig_json,
    }
    return Response(content)
