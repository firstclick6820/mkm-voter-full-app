from django.urls import path
from .views import PollAPI, VoteAPIView





urlpatterns = [
    path('all/', PollAPI.as_view(), name='polls_list'),       # returns all the polls
    path('<int:id>/', PollAPI.as_view(), name='poll_detail'), #return the specific poll details
    path('create/', PollAPI.as_view(), name="create_poll"),
    path('edit/<int:poll_id>/', PollAPI.as_view(), name="edit_poll"),
    path('delete/<int:poll_id>/', PollAPI.as_view(), name="delete_poll"),# create a new poll
    path('<int:poll_id>/vote/', VoteAPIView.as_view(), name='vote'),    #vote for a specific poll
       # delete a specific poll
    
]

