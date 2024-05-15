from rest_framework import viewsets
from apps.detalle.models import Detalle
from apps.detalle.api.Serializer import DetallerSerializer
from apps.documentos.api.permissions import IsAdmin
class DetalleView(viewsets.ModelViewSet):
    permission_classes=[IsAdmin]
    serializer_class = DetallerSerializer
    queryset = Detalle.objects.all()