from django.urls import path,include
from apps.versiones.api.Views import VersioneViewsets
from rest_framework import routers
routerVersiones = routers.DefaultRouter()
routerVersiones.register(prefix='versiones',basename='versiones',viewset=VersioneViewsets)