from apps.servicios.api.Views import ServiciosViews
from rest_framework import routers

routerServicios = routers.DefaultRouter()

routerServicios.register(prefix='servicios',basename='servicios',viewset=ServiciosViews)
