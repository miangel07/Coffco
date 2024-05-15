from rest_framework.serializers import  ModelSerializer
from apps.tipoFormato.models import TipoFormato

class TipoFormatoSerializer(ModelSerializer):
    class Meta:
        model = TipoFormato
        fields = ["nombre"]