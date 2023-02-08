from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from datetime import timedelta
from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.views import View
from rest_framework.decorators import api_view
from rest_framework import status




from accounts.serializers import UserCreateSerializer
from .models import Poll, Choice, Vote
from .seriailzers import PollSerializer, ChoiceWriteSerializer, VoteSerializer, PollWriteSerializer
from django.contrib.auth import get_user_model
User = get_user_model()




def remove_empty_choices(choices):
    return [choice for choice in choices if choice['choice_text']]



class PollAPI(APIView):
    # Get a Poll or List of a Poll
    def get(self, request, id=None):
        if id:
            poll = get_object_or_404(Poll.objects.all(), id=id)
            serializer = PollSerializer(poll)
            return Response(serializer.data)
        else:
            polls = Poll.objects.all().order_by('-created_at')
            serializer = PollSerializer(polls, many=True)
            return Response(serializer.data)
            
        

    # create a poll
    def post(self, request):
        data = request.data.copy()
            
        days = data.pop('days', None)
        hours = data.pop('hours', None)
        minutes = data.pop('minutes', None)
            
        end_date = timezone.now() + timedelta(days=int(days), hours=int(hours), minutes=int(minutes))
        data['end_date'] = end_date
        
        user = request.data['created_by']
        
        data['created_by'] = user['id']
        data['choices'] = remove_empty_choices(data['choices'])
        
        serializer = PollWriteSerializer(data=data)
        if serializer.is_valid():
            poll = serializer.save()
            return Response({'success': 'Poll created successfully'})
        return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)




    # Update a poll
    def put(self, request, poll_id):
        poll = get_object_or_404(Poll.objects.all(), id=poll_id)
        data = request.data.copy()
        
        user = request.data['created_by']
        
        data['created_by'] = user['id']
        data['choices'] = remove_empty_choices(data['choices'])
        
        serializer = PollWriteSerializer(poll, data=data, partial=True)
        if serializer.is_valid():
            poll = serializer.save()
            return Response({'success': 'Poll updated successfully'})
        return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)



    # Delete the poll
    def delete(self, request, poll_id):
        poll = get_object_or_404(Poll, id=poll_id)
        if poll:
            poll.delete()
            return Response({'success': True, "message": "Poll is deleted successfully."})

        return Response({'fail': True, "message": "Something went Wrong, Please try again later!"})

        




















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
