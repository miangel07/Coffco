from rest_framework import viewsets
from apps.finca.models import Finca
from apps.finca.api.Serializer import FincaSerializers
from apps.documentos.api.permissions import IsAdmin
class FincaViewsets(viewsets.ModelViewSet):
    permission_classes=[IsAdmin]
    serializer_class = FincaSerializers
    queryset = Finca.objects.all()