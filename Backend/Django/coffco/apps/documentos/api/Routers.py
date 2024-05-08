from django.urls import path,include
from apps.documentos.api.Views import documetoViewsets
from rest_framework import routers
router = routers.DefaultRouter()
router.register(prefix='documentos',basename='documentos',viewset=documetoViewsets)