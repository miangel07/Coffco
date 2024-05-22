# Generated by Django 5.0.4 on 2024-05-15 01:44

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AlquilerLaboratorio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_alquiler', models.DateTimeField(auto_now_add=True)),
                ('estado', models.CharField(blank=True, choices=[('Activo', 'Activo'), ('Inactivo', 'Inactivo')], max_length=21)),
                ('fecha_fin', models.DateTimeField()),
                ('usuario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]