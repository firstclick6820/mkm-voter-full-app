from django.urls import path
from .views import PollAPI, VoteAPIView





urlpatterns = [
    path('all/', PollAPI.as_view(), name='polls_list'),
    path('<int:id>/', PollAPI.as_view(), name='poll_detail'),
    path('create/', PollAPI.as_view(), name="create_poll"),
    path('<int:poll_id>/vote/', VoteAPIView.as_view(), name='vote'),
    
]

