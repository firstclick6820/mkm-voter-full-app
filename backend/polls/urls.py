from django.urls import path
from .views import PollList, PollDetail, VoteAPIView





urlpatterns = [
    path('all/', PollList.as_view(), name='polls_api_view'),
    path('<int:id>/', PollDetail.as_view(), name='poll_detail'),
    path('<int:poll_id>/vote/', VoteAPIView.as_view(), name='vote'),
]
