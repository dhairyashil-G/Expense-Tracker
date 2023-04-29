from django.urls import path
from . import views

urlpatterns = [
    path('add_expense/', views.AddExpenseView.as_view(), name='add_expense'),
    path('delete_expense/<int:pk>/', views.DeleteExpensesView.as_view(), name='add_expense'),
    path('update_expense/<int:pk>/', views.UpdateExpensesView.as_view(), name='update_expense'),
    path("read_expense/<int:pk>/", views.ReadExpensesView.as_view(), name="read_expense"),
    path('show_expenses/', views.ShowExpensesView.as_view(), name='show_expenses'),
    path('dashboard/', views.DashboardView, name='dashboard'),
]
