from django.db import models
from apps.municipio.models import Municipio
from django.db.models import SET_NULL
from apps.user.models import User
class Finca(models.Model):
    nombre = models.CharField(max_length=100)
    municipio=models.ForeignKey(Municipio,on_delete=SET_NULL,null=True,blank=True)
    usuario = models.ForeignKey(User,on_delete=SET_NULL, null=True, blank=True)
    def __str__(self):
        return self.nombre
    