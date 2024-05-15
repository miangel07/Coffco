from rest_framework import viewsets
from apps.alquilerLaboratorio.models import AlquilerLaboratorio
from apps.alquilerLaboratorio.api.Serializer import AlquilerSerializer
from apps.alquilerLaboratorio.api.permissions import IsAdmin
class alquilerView(viewsets.ModelViewSet):
    permission_classes=[IsAdmin]
    serializer_class = AlquilerSerializer
    queryset = AlquilerLaboratorio.objects.all()