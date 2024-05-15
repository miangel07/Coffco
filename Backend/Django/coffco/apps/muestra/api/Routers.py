from django.urls import path,include
from apps.documentos.api.Views import documetoViewsets
from rest_framework import routers
routerMuestra = routers.DefaultRouter()
routerMuestra.register(prefix='mustra',basename='muestra',viewset=documetoViewsets)