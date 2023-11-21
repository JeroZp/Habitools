from django.db import models
from django.contrib.auth.models import User

class Habito(models.Model):
    nombre = models.CharField(max_length=200)
    categoria = models.CharField(max_length=200)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    