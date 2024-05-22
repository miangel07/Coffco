from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import status
from apps.user.models import User
from rest_framework.response import Response
from apps.user.api.Serializer import UserSerializer,UserUpdate


class UserRegisterView(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
class UserView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
class UserUpdateView(APIView):
    permission_classes = [IsAuthenticated]
    def put(self,request):
        user=User.objects.get(pk=request.user.id)
        serializer = UserUpdate(user,request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
        

class UserDeleteView(APIView):
    permission_classes = [IsAuthenticated]
    def delete(self,request):
        request.user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


                          

