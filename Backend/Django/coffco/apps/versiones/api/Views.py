from rest_framework import viewsets
from apps.versiones.api.permissions import IsAdmin
from apps.versiones.models import Versione
from apps.versiones.api.Serializers import VersioneSerializers

class VersioneViewsets(viewsets.ModelViewSet):
    permission_classes=[IsAdmin]
    serializer_class = VersioneSerializers
    queryset = Versione.objects.all()
