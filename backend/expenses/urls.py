from django.urls import path
from . import views

urlpatterns = [
    path('add_expense/', views.CreateExepenseSerializer.as_view(), name='add_expense'),
    path('show_expense/', views.ShowExpensesView.as_view(), name='show_expense'),
    # path('dashboard/', views.RegisterView.as_view(), name='dashboard'),
]
