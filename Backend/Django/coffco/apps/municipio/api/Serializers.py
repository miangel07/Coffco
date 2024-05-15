from rest_framework.serializers import  ModelSerializer
from apps.municipio.models import Municipio

class MunicipioSerializer(ModelSerializer):
    class Meta:
        model = Municipio
        fields = ['nombre']

