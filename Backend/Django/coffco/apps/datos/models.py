from django.db import models
from apps.versiones.models import Versione
from django.db.models import SET_NULL
class Dato(models.Model):
   nombre = models.CharField(max_length=100)
   tipo=models.DecimalField(max_digits=10, decimal_places=2)
   Activo='Activo'
   Inactivo='Inactivo'
   enumEstado=[
   (Activo,'Activo'),
   (Inactivo,'Inactivo'),
   ]
   estado_Datos=models.CharField(max_length=21,choices=enumEstado,null=False,blank=True)
   formato = models.ForeignKey(Versione, on_delete=SET_NULL, null=True, blank=True)

   def __str__(self):
       return str(self.nombre)