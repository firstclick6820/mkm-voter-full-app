from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.decorators import user_passes_test, login_required

from django.shortcuts import render, redirect, get_object_or_404

from .models import Poll, Choice, Vote



