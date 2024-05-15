from django.urls import path,include
from apps.municipio.api.Views import MunicipioViews
from rest_framework import routers
routerMunicipio = routers.DefaultRouter()
routerMunicipio.register(prefix='municipio',basename='municipio',viewset=MunicipioViews)