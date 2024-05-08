from django.db import models
from apps.user.models import User
from django.db.models import SET_NULL
class AlquilerLaboratorio(models.Model):
    fecha_alquiler = models.DateTimeField(auto_now_add=True)
    usuario = models.ForeignKey(User,on_delete=SET_NULL,null=True,blank=True)
    Activo='Activo'
    Inactivo='Inactivo'
    enumEstado=[
    (Activo,'Activo'),
    (Inactivo,'Inactivo'),
    ]
    estado=models.CharField(max_length=21,choices=enumEstado,null=False,blank=True)
    fecha_fin=models.DateTimeField()
    def __str__(self):
        return str(self.usuario)