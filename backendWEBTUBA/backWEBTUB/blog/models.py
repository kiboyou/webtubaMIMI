from django.db import models

# Create your models here.

class Blog(models.Model): 

    date = models.CharField(max_length=255)
    texte = models.TextField(blank=True, null=True)
    img = models.ImageField()

    def __str__(self):
        return self.date