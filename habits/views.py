from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


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

@login_required
def login_view(request):
    if request.method == 'POST':
        username = request.POST['email']
        password = request.POST['password']
        user =  authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index.html')
        else: 
            return render(request, 'registration/login.html', {'error': 'Usuario o contraseña invalidos'})
    return render(request, 'registration/login.html')

def exit(request):
    logout(request)
    return redirect('login_view')