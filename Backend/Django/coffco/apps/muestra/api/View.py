from rest_framework import viewsets
from apps.muestra.models import Muestra
from apps.muestra.api.Serializer import MuestraSerializer
from apps.documentos.api.permissions import IsAdmin
class documetoViewsets(viewsets.ModelViewSet):
    permission_classes=[IsAdmin]
    serializer_class = MuestraSerializer
    queryset = Muestra.objects.all()