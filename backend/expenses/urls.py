from django.urls import path
from . import views

urlpatterns = [
    path('add_expense/', views.AddExpenseView.as_view(), name='add_expense'),
    path('show_expenses/', views.ShowExpensesView.as_view(), name='show_expenses'),
    path('dashboard/', views.DashboardView, name='dashboard'),
]
