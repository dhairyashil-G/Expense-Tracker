from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializer import CreateExepenseSerializer, ListExpensesSerializer
from rest_framework import generics
from .models import Expenses
import plotly
import plotly.graph_objects as go
import pandas as pd
from rest_framework.response import Response
from django.db.models import Sum
from django.db.models.functions import ExtractMonth

# Create your views here.


class AddExpenseView(generics.CreateAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = CreateExepenseSerializer


class ShowExpensesView(generics.ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = ListExpensesSerializer

    def get_queryset(self):
        # user = self.request.user
        # return Expenses.objects.filter(user=user)
        return Expenses.objects.filter(user=3)


@api_view(['GET', ])
# @permission_classes([IsAuthenticated])
def DashboardView(request):
    # user = request.user
    # expenses = Expenses.objects.filter(user=user)
    expenses = Expenses.objects.filter(user=3).values()
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
    line_chart = go.Scatter(x=[x['month'] for x in time_series], y=[
                            x['total'] for x in time_series])
    limit_line = go.Scatter(x=[min([x['month'] for x in time_series]), max([x['month'] for x in time_series])],
                            y=[request.user.limit, request.user.limit], mode='lines', name='Monthly Limit')
    line_layout = go.Layout(title='Expenses Over Time')
    line_fig = go.Figure(data=[line_chart, limit_line], layout=line_layout)
    line_fig_JSON = plotly.io.to_json(line_fig)

    # Create a pie chart of expenses by category
    category_proportions = expenses.values(
        'category').annotate(total=Sum('amount'))
    category_proportions.append(
        {'category': 'Remaining', 'total': request.user.limit - sum([x['total'] for x in category_proportions])})
    pie_chart = go.Pie(labels=[x['category'] for x in category_proportions], values=[
                       x['total'] for x in category_proportions])
    pie_layout = go.Layout(title='Proportions of Expenses by Category')
    pie_fig = go.Figure(data=[pie_chart], layout=pie_layout)
    pie_fig_json = plotly.io.to_json(pie_fig)

    content = {
        'df': df,
        'bar_fig': bar_fig_JSON,
        'line_fig': line_fig_JSON,
        'pie_fig': pie_fig_json,
    }
    return Response(content)
