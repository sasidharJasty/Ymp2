# Generated by Django 4.2.7 on 2024-01-09 03:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0009_customuser_teamlead_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='teamlead_email',
        ),
    ]
