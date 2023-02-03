from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.http import HttpResponse, JsonResponse

    
    

from .models import Poll, Choice, Vote
from .seriailzers import PollSerializer, ChoiceSerializer, VoteSerializer








class PollList(generics.ListAPIView):
    queryset = Poll.objects.all().order_by('-created_at')
    serializer_class = PollSerializer



class PollDetail(generics.RetrieveAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

    def get_object(self):
        return get_object_or_404(self.queryset, id=self.kwargs['id'])


