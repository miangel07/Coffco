from django.urls import path,include
from apps.detalle.api.Views import DetalleView
from rest_framework import routers
routerDetalle = routers.DefaultRouter()
routerDetalle.register(prefix='detalle',basename='detalle',viewset=DetalleView)