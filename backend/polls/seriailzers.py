from django.contrib.auth import get_user_model
from django.db import IntegrityError



from rest_framework import serializers



from .models import Poll, Choice, Vote
from accounts.serializers import UserCreateSerializer as UserSerializer

User = get_user_model()



# choices Seriailzer 
class ChoiceSerializer(serializers.ModelSerializer):
    vote_percentage = serializers.SerializerMethodField()
    
    class Meta:
        model = Choice
        fields = ('id','choice_text', 'votes', 'vote_percentage')

    def get_vote_percentage(self, obj):
        return obj.vote_percentage()
    
    
    

# Choice Write Seriailzer
class ChoiceWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ['choice_text']

    def create(self, validated_data, poll):
        validated_data['question'] = poll
        try:
            choice = Choice.objects.create(question=poll, choice_text=validated_data['choice_text'])
        except IntegrityError:
            raise serializers.ValidationError("Choice already exists")
        return choice

        
        

class PollSerializer(serializers.ModelSerializer):
    # created_by = UserSerializer()
    
    choices = ChoiceSerializer(many=True)
    total_votes = serializers.SerializerMethodField()
    voters = serializers.SerializerMethodField()
    created_by = UserSerializer(many=False)
    end_date = serializers.DateTimeField()
    user_details = serializers.SerializerMethodField()
    
    class Meta:
        model = Poll
        fields = ('id', 'question', 'end_date', 'is_active',  'views', 'created_by' ,'choices', 'total_votes', 'voters', 'user_details')



    def get_total_votes(self, obj):
        return obj.total_votes()


    def get_voters(self, obj):
        return [vote.user.email for vote in obj.votes.all()]
    
    
    def get_user_details(self, obj):
        return obj.user_details()

class PollWriteSerializer(serializers.ModelSerializer):
    choices = ChoiceWriteSerializer(many=True)

    class Meta:
        model = Poll
        fields = ['question', 'created_by', 'end_date', 'choices']


    def create(self, validated_data):
        choices_data = validated_data.pop('choices')
        poll = Poll.objects.create(**validated_data)
        for choice_data in choices_data:
            ChoiceWriteSerializer(data=choice_data, context={'poll': poll}).is_valid(raise_exception=True)
            ChoiceWriteSerializer.create(ChoiceWriteSerializer(), validated_data=choice_data, poll=poll)
        return poll
    
    
    
    
    # updating the poll
    def update(self, instance, validated_data):
        instance.question = validated_data.get('question', instance.question)
        instance.created_by = validated_data.get('created_by', instance.created_by)
        instance.end_date = validated_data.get('end_date', instance.end_date)
        instance.save()

        choices_data = validated_data.get('choices', [])
        instance.choices.all().delete()
        for choice_data in choices_data:
            ChoiceWriteSerializer(data=choice_data, context={'poll': instance}).is_valid(raise_exception=True)
            ChoiceWriteSerializer.create(ChoiceWriteSerializer(), validated_data=choice_data, poll=instance)
        return instance






        
class VoteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Vote
        fields = "__all__"
        
        