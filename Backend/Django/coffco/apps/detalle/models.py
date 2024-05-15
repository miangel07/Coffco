from django.db import models
from apps.versiones.models import Versione
from apps.datos.models import Dato
from apps.servicios.models import Servicio
from django.db.models import SET_NULL

class Detalle(models.Model):
    versiones=models.ForeignKey(Versione,on_delete=SET_NULL,null=True,blank=True)
    Dato = models.ForeignKey(Dato,on_delete=SET_NULL,null=True,blank=True)
    valor=models.DecimalField(max_digits=10, decimal_places=2,null=True,blank=True)
    servicio=models.ForeignKey(Servicio,on_delete=SET_NULL,null=True, blank=True)
    def __str__(self):
        return str(self.versiones)