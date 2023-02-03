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






class userProfileSerializer(serializers.ModelSerializer):
    user = UserCreateSerializer()
    fullname = serializers.SerializerMethodField()
    
    class Meta:
        model=Profile
        fields= ('fullname', 'user', 'bio', 'summary', 'address', 'date_of_joining', 'date_of_birth',)
        
        
    def get_fullname(self, obj):
        return "{} {}".format(obj.first_name, obj.last_name)