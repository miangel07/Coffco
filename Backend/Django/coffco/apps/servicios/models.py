from django.db import models
from apps.versiones.models import Versione
from apps.muestra.models import Muestra
from django.db.models import SET_NULL
class Servicio(models.Model):
    nombre_servicio = models.CharField(max_length=100)
    versiones=models.ForeignKey(Versione, on_delete=SET_NULL, null=True, blank=True)
    muestra=models.ForeignKey(Muestra, on_delete=SET_NULL,null=True, blank=True)

    def __str__(self):
        return self.nombre_servicio
    