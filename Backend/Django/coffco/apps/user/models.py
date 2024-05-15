from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    cedula_ciudadania='Cedula ciudadania'
    tarjeta_identidad='Tarjeta de identidad'
    Nit ='Nit'
    enumTipo=[
    (cedula_ciudadania,'Cedula ciudadania'),
    (tarjeta_identidad,'Tarjeta de identidad'),
    (Nit,'Nit'),
    ]
    administrador='Administrador'
    encargado='Encargado'
    invitado='Invitado'
    enumRol=[
        (administrador,'Administrador'),
        (encargado,'Encargado'),
        (invitado,'Invitado'),
    ]
    tipo_documento=models.CharField(max_length=21,choices=enumTipo,null=False,verbose_name='Tipo documento')
    numero_documento = models.BigIntegerField(null=True)
    rol= models.CharField(max_length=21, choices=enumRol, null=False,verbose_name='Rol') 