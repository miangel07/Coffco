
from apps.tipoFormato.api.Views import TipoFormatoViewSet
from rest_framework import routers
routerTipoFormato = routers.DefaultRouter()
routerTipoFormato.register(prefix='tipoFormato',basename='tipoFormato',viewset=TipoFormatoViewSet)
