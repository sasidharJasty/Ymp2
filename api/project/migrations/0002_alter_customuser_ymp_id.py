# Generated by Django 4.2.7 on 2023-11-17 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='ymp_id',
            field=models.CharField(default=0, max_length=6, unique=True),
        ),
    ]