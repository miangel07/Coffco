from rest_framework.serializers import  ModelSerializer
from apps.muestra.models import Muestra

class MuestraSerializer(ModelSerializer):
    class Meta:
        model = Muestra
        fields = ['cantidad','finca', 'fecha']

