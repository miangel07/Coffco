from rest_framework.serializers import  ModelSerializer
from apps.servicios.models import Servicio

class ServicioSerializers(ModelSerializer):
    class Meta:
        model = Servicio
        fields = ['nombre_servicio','versiones', 'muestra']

