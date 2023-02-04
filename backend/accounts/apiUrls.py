from django.urls import path
from rest_framework.routers import DefaultRouter
import uuid
from .api import CheckEmailAPI, UserProfileListCreateView, userProfileAPIVIEW

urlpatterns = [
    path('check_email/<str:email>/', CheckEmailAPI, name="checkEmailAAPI"),
    #gets all user profiles and create a new profile
    path("all-profiles/",UserProfileListCreateView.as_view(),name="all-profiles"),
   # retrieves profile details of the currently logged in user
    path("profile/<uuid:user_id>/",userProfileAPIVIEW.as_view(),name="profile"),
    
    # saving settings for a profile
    path('settings/<uuid:user_id>/', userProfileAPIVIEW.as_view(), name="settings")
]

