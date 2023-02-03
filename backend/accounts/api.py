from django.shortcuts import render
from django.http import  JsonResponse

from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView,)

# Restframework Models
from rest_framework.decorators import api_view


from rest_framework.permissions import IsAuthenticated

# from .permissions import IsOwnerProfileOrReadOnly
from .serializers import userProfileSerializer
from .permission import IsOwnerProfileOrReadOnly



from .models import Profile
# Import Custom User
from django.contrib.auth import get_user_model
User = get_user_model()









# ====================== User API  =========================================


class UserProfileListCreateView(ListCreateAPIView):
    queryset=Profile.objects.all()
    serializer_class=userProfileSerializer
    # permission_classes=[IsAuthenticated]

    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)


class userProfileDetailView(RetrieveUpdateDestroyAPIView):
    queryset=Profile.objects.all()
    serializer_class=userProfileSerializer
    # permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]























# Check whether the email address is taken or not
@api_view(['GET'])
def CheckEmailAPI(request, email):
    is_email_avialable = User.objects.filter(email=email).exists()
    
    if is_email_avialable:
        return JsonResponse({'available': False}, safe=False)
    else:
        return JsonResponse({'available': True}, safe=False)
