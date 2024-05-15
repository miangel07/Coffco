from rest_framework.serializers import  ModelSerializer
from apps.detalle.models import Detalle

class DetallerSerializer(ModelSerializer):
    class Meta:
        model = Detalle
        fields = ['versiones','Dato', 'valor','servicio']

