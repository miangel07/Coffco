from django.urls import path,include
from apps.alquilerLaboratorio.api.Views import alquilerView
from rest_framework import routers
routerAlquiler = routers.DefaultRouter()
routerAlquiler.register(prefix='alquiler',basename='alquiler',viewset=alquilerView)