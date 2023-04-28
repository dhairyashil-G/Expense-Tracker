from rest_framework import serializers
from .models import Expenses


class CreateExepenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expenses
        fields = ['date','amount', 'category', 'description']
        # fields = ['date', 'amount', 'category', 'description', 'user']

    def save(self):
        user_instance = self.context['request'].user
        expense_instance = Expenses.objects.create(user=user_instance, **self.validated_data)
        # expense_instance = Expenses.objects.create(**self.validated_data)
        return expense_instance

class ListExpensesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expenses
        fields = ['id', 'date', 'amount', 'category', 'description']
