# Generated by Django 4.2 on 2023-04-24 09:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='limit',
            field=models.PositiveBigIntegerField(default=100),
            preserve_default=False,
        ),
    ]
