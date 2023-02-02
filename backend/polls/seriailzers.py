from rest_framework import serializers


from .models import Poll, Choice, Vote


class PollSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Poll
        fields = ['id', 'question', 'end_date', 'is_active', 'is_published', 'views', 'created_by', 'created_at', 'updated_at']



class ChoiceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Choice
        fields = "__all__"
        
        
        
class VoteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Vote
        fields = "__all__"