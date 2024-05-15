from rest_framework import viewsets
from apps.municipio.models import Municipio
from apps.municipio.api.Serializers import MunicipioSerializer
from apps.documentos.api.permissions import IsAdmin
class MunicipioViews(viewsets.ModelViewSet):
    permission_classes=[IsAdmin]
    serializer_class = MunicipioSerializer
    queryset = Municipio.objects.all()