from django.db import models
from apps.tipoFormato.models import TipoFormato
from django.db.models import SET_NULL
from apps.user.models import User
from apps.documentos.models import Documento
class Versione(models.Model):
    version = models.CharField(max_length=100)
    editable = models.BooleanField(default=False)
    formato = models.ForeignKey(TipoFormato,on_delete=SET_NULL, null=True)
    usuario = models.ForeignKey(User,on_delete=SET_NULL,null=True,blank=True)
    documento=models.ForeignKey(Documento,on_delete=SET_NULL,null=True,blank=True)
    def __str__(self):
        return str(self.version)