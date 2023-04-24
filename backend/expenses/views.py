from django.shortcuts import render

# Create your views here.

from rest_framework.permissions import IsAuthenticated
from .serializer import CreateExepenseSerializer, ListExpensesSerializer
from rest_framework import generics
from .models import Expenses

# Create your views here.


class ShowExpensesView(generics.ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = ListExpensesSerializer

    def get_queryset(self):
        user = self.request.user
        return Expenses.objects.filter(user=user)


class AddExpenseView(generics.CreateAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = CreateExepenseSerializer

    def get_queryset(self):
        user = self.request.user
        return Expenses.objects.filter(user=user)
