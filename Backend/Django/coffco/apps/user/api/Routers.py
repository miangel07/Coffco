from django.urls import path
from apps.user.api.Views import user_viewset
from rest_framework_simplejwt.views import(TokenObtainPairView, TokenRefreshView)
from rest_framework import routers

routeruser = routers.DefaultRouter()

routeruser.register(prefix='user',basename='user',viewset=user_viewset)


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]