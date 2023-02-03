from rest_framework import serializers


from .models import Poll, Choice, Vote

from accounts.serializers import UserCreateSerializer as UserSerializer




class ChoiceSerializer(serializers.ModelSerializer):
    vote_percentage = serializers.SerializerMethodField()
    
    class Meta:
        model = Choice
        fields = ('choice_text', 'votes', 'vote_percentage')

    def get_vote_percentage(self, obj):
        return obj.vote_percentage()

        
        
        
class VoteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Vote
        fields = "__all__"
        
        
class PollSerializer(serializers.ModelSerializer):
    created_by = UserSerializer()
    choices = ChoiceSerializer(many=True)
    total_votes = serializers.SerializerMethodField()
    voters = serializers.SerializerMethodField()

    class Meta:
        model = Poll
        fields = ('id', 'question', 'end_date', 'is_active',  'views', 'created_by', 'choices', 'total_votes', 'voters',)

    def get_total_votes(self, obj):
        return obj.total_votes()

    def get_voters(self, obj):
        return [vote.user.email for vote in obj.votes.all()]






