from django.urls import path,include
from apps.datos.api.Views import DocumetoViewsets
from rest_framework import routers
routerDatos = routers.DefaultRouter()
routerDatos.register(prefix='datos',basename='datos',viewset=DocumetoViewsets)