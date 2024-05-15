from django.db import models
from apps.finca.models import Finca
from django.db.models import SET_NULL
class Muestra(models.Model):
    cantidad=models.DecimalField(max_digits=10, decimal_places=2)
    finca=models.ForeignKey(Finca,on_delete=SET_NULL,null=True,blank=True )
    fecha=models.DateField()
    def __str__(self):
        return str(self.finca)
        