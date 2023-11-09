from django.shortcuts import render
from django.http import HttpResponse


# Create your views here
def home(request):
    return render(request, 'index.html')

def Calendar(request):
    return render(request, 'Calendar.html')

def habits(request):
    return render(request, 'habits.html')

def progress(request):
    return render(request, 'progress.html')

def mis_habits_view(request):
    return render(request, 'mis_habits.html')
