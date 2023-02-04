from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

    
from django.contrib.auth.decorators import login_required
from django.views import View


from accounts.serializers import UserCreateSerializer
from .models import Poll, Choice, Vote
from .seriailzers import PollSerializer, ChoiceSerializer, VoteSerializer
from django.contrib.auth import get_user_model
User = get_user_model()







class PollList(generics.ListAPIView):
    queryset = Poll.objects.all().order_by('-created_at')
    serializer_class = PollSerializer



class PollDetail(generics.RetrieveAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

    def get_object(self):
        return get_object_or_404(self.queryset, id=self.kwargs['id'])



class VoteAPIView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    # @login_required
    def post(self, request, poll_id):
        poll = get_object_or_404(Poll, id=poll_id)
        choice = get_object_or_404(Choice, id=request.data.get('choice_id'))
        choice.votes += 1
        choice.save()
        user = get_object_or_404(User, id=request.data.get('user_id'))
        vote = Vote.objects.create(question=poll, user=user, choice=choice, ip_address=request.META['REMOTE_ADDR'])
        vote.save()
        
        return Response({"success": True, "message": "Your vote has been recorded!"})
