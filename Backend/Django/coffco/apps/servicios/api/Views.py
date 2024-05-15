
from rest_framework import viewsets
from apps.servicios.models import Servicio
from apps.servicios.api.Serializers import ServicioSerializers
from apps.documentos.api.permissions import IsAdmin
class ServiciosViews(viewsets.ModelViewSet):
    permission_classes=[IsAdmin]
    serializer_class = ServicioSerializers
    queryset = Servicio.objects.all()
