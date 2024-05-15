from rest_framework.serializers import  ModelSerializer
from apps.datos.models import Dato

class DatoSerializer(ModelSerializer):
    class Meta:
        model = Dato
        fields=['nombre','tipo','estado_Datos','formato']