from rest_framework.serializers import  ModelSerializer
from apps.finca.models import Finca

class FincaSerializers(ModelSerializer):
    class Meta:
        model = Finca
        fields = ['nombre','municipio', 'usuario']

