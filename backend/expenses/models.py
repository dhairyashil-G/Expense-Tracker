from django.db import models
from django.conf import settings
from datetime import date

# Create your models here.

category_choices = (('Housing', 'Housing'), ('Transportation', 'Transportation'), ('Groceries', 'Groceries'), ('Health Care', 'Health Care'),
                    ('Entertainment', 'Entertainment'), ('Education', 'Education'), ('Personal Care', 'Personal Care'), ('Miscellaneous', 'Miscellaneous'))


class Expenses(models.Model):
    date = models.DateField(default=date.today)
    amount = models.BigIntegerField()
    category = models.CharField(max_length=255, choices=category_choices)
    description = models.TextField(blank=True, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
