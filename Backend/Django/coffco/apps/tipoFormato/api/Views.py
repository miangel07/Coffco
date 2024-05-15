from rest_framework import viewsets
from apps.tipoFormato.models import TipoFormato
from apps.tipoFormato.api.Serializer import TipoFormatoSerializer
from apps.tipoFormato.api.permissions import IsAdmin

class TipoFormatoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdmin]
    serializer_class = TipoFormatoSerializer
    queryset = TipoFormato.objects.all()
    