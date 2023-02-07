from django.shortcuts import render
from django.http import  JsonResponse, Http404

from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView,)

# Restframework Models
from rest_framework.decorators import api_view
from rest_framework.views import APIView

import uuid
from rest_framework.permissions import IsAuthenticated

# from .permissions import IsOwnerProfileOrReadOnly
from .serializers import UserProfileSerializer
from .permission import IsOwnerProfileOrReadOnly

from rest_framework import status

from .models import Profile
# Import Custom User
from django.contrib.auth import get_user_model
User = get_user_model()

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response












# ====================== User API  =========================================


class UserProfileListCreateView(ListCreateAPIView):
    queryset=Profile.objects.all()
    serializer_class=UserProfileSerializer
    # permission_classes=[IsAuthenticated]

    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)







class userProfileAPIVIEW(APIView):
    # permission_classes = [permissions.IsAuthenticated]


    # Get A User Profile
    def get(self, request, user_id):
        profile = get_object_or_404(Profile, user__id = user_id)   
        seriailzer = UserProfileSerializer(profile, many=False)

        
        return Response({"success": True , "data": seriailzer.data})
    
    
    # Update A User Profile
    # @login_required
    def patch(self, request, user_id):
        profile = get_object_or_404(Profile, user__id=user_id)
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True, "message": "Profile updated successfully."})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
















# ============================================================================ Check Email
# Check whether the email address is taken or not
@api_view(['GET'])
def CheckEmailAPI(request, email):
    is_email_avialable = User.objects.filter(email=email).exists()
    
    if is_email_avialable:
        return JsonResponse({'available': False}, safe=False)
    else:
        return JsonResponse({'available': True}, safe=False)


#check wheather the email address is exists in the db or not
@api_view(['GET'])
def checkEmailExists(request, email):
    
    is_email_exists = User.objects.filter(email=email).exists()
    
    if is_email_exists:
        return JsonResponse({'exists': True})
    else:
        return JsonResponse({'exists': False})