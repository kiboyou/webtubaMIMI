from django.db import models

# Create your models here.

class Client(models.Model):
    
    nom = models.CharField(max_length=150)
    prenom = models.CharField(max_length=150)
    email = models.EmailField()
    contact = models.CharField(max_length=50)
     
    def __str__(self):
        return self.nom
    

    
class ContactezNous(models.Model):

    client = models.ForeignKey(Client, on_delete=models.CASCADE) 
    message = models.TextField()

    def __str__(self):
        return self.client.nom + self.message



class RendezVous(models.Model): 

    client = models.ForeignKey(Client, on_delete=models.CASCADE) 
    objet = models.CharField(max_length=255)
    message = models.TextField(blank=True, null=True)
    type = models.CharField(max_length=150)
    date = models.CharField(max_length=50)
    heure = models.CharField(max_length=50)

    def __str__(self):
        return self.client.nom + self.objet