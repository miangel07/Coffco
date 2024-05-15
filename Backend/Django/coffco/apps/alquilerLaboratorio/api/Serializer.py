from rest_framework.serializers import  ModelSerializer
from apps.alquilerLaboratorio.models import AlquilerLaboratorio

class AlquilerSerializer(ModelSerializer):
    class Meta:
        model = AlquilerLaboratorio
        fields = ['fecha_alquiler','usuario', 'estado','fecha_fin']