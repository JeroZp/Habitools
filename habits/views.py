from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from .models import Habito


# Create your views here

def bienvenida(request):
    return render(request, 'index.html')

def registro(request):
    if request.method == 'POST':
        # Si se envió un formulario
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # Si el formulario es válido, crea el usuario pero no lo autentica automáticamente
            user = form.save()
            
            # Autentica al usuario después del registro
            login(request, user)
            
            # Puedes redirigir a una página de bienvenida o a donde desees
            return redirect('home')  # Ajusta según tus necesidades
    else:
        # Si es una solicitud GET, simplemente muestra el formulario
        form = UserCreationForm()
    
    return render(request, 'signup.html', {'form': form})

#@login_required
def home(request):
    return render(request, 'home.html')

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
    habitos = Habito.objects.filter(usuario=request.user)
    return render(request, 'mis_habits.html', {'habitos': habitos})   


@login_required
def login_view(request):
    if request.method == 'POST':
        username = request.POST['user']
        password = request.POST['password']
        user =  authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home.html')
        else: 
            return render(request, 'registration/login.html', {'error': 'Usuario o contraseña invalidos'})
    return render(request, 'registration/login.html')

def logout_view(request):
    logout(request)
    return redirect('login_View')

def mostrar_habitos(request):
    # Obtener los hábitos almacenados en la base de datos
    habitos = Habito.objects.filter(usuario=request.user)

    # Pasar la información a la plantilla
    context = {'habitos': habitos}
    return render(request, 'mis_habits.html', context)


@login_required
def guardar_habito(request):
    if request.method == 'POST':
        nombre_habito = request.POST['nombre_habito']
        categoria_habito = request.POST['categoria_habito']
        Habito.objects.create(nombre=nombre_habito, categoria=categoria_habito, usuario=request.user)
        return redirect('mis_habits')
    
def get_chart(request):

    chart= {}

    return JsonResponse(chart)