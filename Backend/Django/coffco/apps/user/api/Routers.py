from django.urls import path
from apps.user.api.Views import UserView,UserRegisterView,UserDeleteView,UserUpdateView
from rest_framework_simplejwt.views import(TokenObtainPairView, TokenRefreshView)



urlpatterns = [
    path('auth/registrar/',UserRegisterView.as_view()),
    path('auth/login/', TokenObtainPairView.as_view()),
    path('auth/me',UserView.as_view()),
    path('auth/eliminar',UserDeleteView.as_view()),
    path('auth/actualizar',UserUpdateView.as_view()),
    path('auth/token/refresh/', TokenRefreshView.as_view()),
    ]