from rest_framework import viewsets
from apps.user.models import User
from apps.user.api.Serializer import UserSerializer
class user_viewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


