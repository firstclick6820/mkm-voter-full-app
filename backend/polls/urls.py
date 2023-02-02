from django.urls import path
from .views import PollList





urlpatterns = [
    path('all/', PollList.as_view(), name='polls_api_view'),
]
