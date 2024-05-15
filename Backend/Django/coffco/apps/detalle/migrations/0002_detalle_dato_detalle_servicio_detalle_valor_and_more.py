# Generated by Django 5.0.4 on 2024-05-15 04:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datos', '0001_initial'),
        ('detalle', '0001_initial'),
        ('servicios', '0001_initial'),
        ('versiones', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='detalle',
            name='Dato',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='datos.dato'),
        ),
        migrations.AddField(
            model_name='detalle',
            name='servicio',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='servicios.servicio'),
        ),
        migrations.AddField(
            model_name='detalle',
            name='valor',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='detalle',
            name='versiones',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='versiones.versione'),
        ),
    ]
