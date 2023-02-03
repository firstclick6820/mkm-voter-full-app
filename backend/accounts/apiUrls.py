from django.urls import path
from rest_framework.routers import DefaultRouter

from .api import CheckEmailAPI, UserProfileListCreateView, userProfileDetailView

urlpatterns = [
    path('check_email/<str:email>/', CheckEmailAPI, name="checkEmailAAPI"),
    #gets all user profiles and create a new profile
    path("all-profiles/",UserProfileListCreateView.as_view(),name="all-profiles"),
   # retrieves profile details of the currently logged in user
    path("profile/<int:pk>/",userProfileDetailView.as_view(),name="profile"),
]

