# Generated by Django 4.2.7 on 2024-01-04 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0007_hourrecord_approved'),
    ]

    operations = [
        migrations.AddField(
            model_name='hourrecord',
            name='denied',
            field=models.BooleanField(default=False),
        ),
    ]
