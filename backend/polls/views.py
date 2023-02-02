
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics


from .models import Poll, Choice, Vote
from .seriailzers import PollSerializer, ChoiceSerializer, VoteSerializer








class PollList(generics.ListAPIView):
    queryset = Poll.objects.all().order_by('-created_at')
    serializer_class = PollSerializer
