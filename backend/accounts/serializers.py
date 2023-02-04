from djoser.serializers import UserCreateSerializer as BaseUserCreateSerailizer 
from rest_framework import serializers
# Import Custom User
from django.contrib.auth import get_user_model
User = get_user_model()

from .models import Profile



    
    
    
    
class UserCreateSerializer(BaseUserCreateSerailizer):
    class Meta(BaseUserCreateSerailizer.Meta):
        model = User
        fields = ['id', 'email', 'password', 'account_type']






# class userProfileSerializer(serializers.ModelSerializer):
#     user = UserCreateSerializer()
#     fullname = serializers.SerializerMethodField()
#     votes = serializers.SerializerMethodField()
#     polls = serializers.SerializerMethodField()
    
#     class Meta:
#         model=Profile
#         fields= ('first_name' , 'last_name' , 'fullname', 'user', 'bio', 'summary', 'address', 'date_of_joining', 'date_of_birth', 'votes', 'polls')
        
#     def get_fullname(self, obj):
#         return obj.fullname()
    
    
#     def get_votes(self, obj):
#         return obj.votes()
    
    
#     def get_polls(self, obj):
#         return obj.polls()
    
    
    
# class UserProfileUpdateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Profile
#         fields= ('first_name' , 'last_name' , 'bio', 'summary', 'address')
        partial=True




class UserProfileSerializer(serializers.ModelSerializer):
    user = UserCreateSerializer()
    fullname = serializers.SerializerMethodField()
    votes = serializers.SerializerMethodField()
    polls = serializers.SerializerMethodField()
    
    class Meta:
        model = Profile
        fields = ('first_name', 'last_name', 'fullname', 'user', 'bio', 'summary', 'address', 'date_of_joining', 'date_of_birth', 'votes', 'polls')
        partial = True

    def get_fullname(self, obj):
        return obj.fullname()

    def get_votes(self, obj):
        return obj.votes()

    def get_polls(self, obj):
        return obj.polls()
