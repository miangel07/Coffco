from rest_framework import viewsets
from apps.datos.models import Dato
from apps.datos.api.Serializer import DatoSerializer
from apps.datos.api.permissions import IsAdmin
class DocumetoViewsets(viewsets.ModelViewSet):
    permission_classes=[IsAdmin]
    serializer_class = DatoSerializer
    queryset = Dato.objects.all()