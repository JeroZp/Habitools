from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


# Create your views here

#@login_required
def home(request):
    return render(request, 'index.html')

#@login_required
def Calendar(request):
    return render(request, 'Calendar.html')

#@login_required
def habits(request):
    return render(request, 'habits.html')

#@login_required
def progress(request):
    return render(request, 'progress.html')

#@login_required
def mis_habits_view(request):
    return render(request, 'mis_habits.html')

def signup(request):
    return render(request, 'signup.html')

@login_required
def login_view(request):
    if request.method == 'POST':
        username = request.POST['user']
        password = request.POST['password']
        user =  authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index.html')
        else: 
            return render(request, 'registration/login.html', {'error': 'Usuario o contraseña invalidos'})
    return render(request, 'registration/login.html')

def logout_view(request):
    logout(request)
    return redirect('login.html')

def mostrar_habitos(request):
    # Obtener los hábitos almacenados en localStorage
    habits = request.session.get('habits', [])

    # Pasar la información a la plantilla
    context = {'habits': habits}
    return render(request, 'mis_habits', context)
