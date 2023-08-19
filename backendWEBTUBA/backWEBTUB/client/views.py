from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from .models import Client, ContactezNous, RendezVous
from .serializer import ClientSerializer, CNSerializer, RVSerializer



class ClientModelViewSet(ModelViewSet):
     
     serializer_class = ClientSerializer
     queryset = Client.objects.all()



class CNModelViewSet(ModelViewSet):
     
     serializer_class = CNSerializer
     #queryset = ContactezNous.objects.all()

     def get_queryset(self):
         cn = ContactezNous.objects.all()
         return cn
     

     def create(self, request, *args, **kwargs):
          data = request.data
          new_client = Client.objects.create(nom = data["nom"], prenom = data["prenom"], email=data["email"], contact=data["contact"])
          new_client.save()

          new_contactez_nou = ContactezNous.objects.create(client=new_client, message=data["message"])
          new_contactez_nou.save()

          serializer = CNSerializer(new_contactez_nou)
          return Response(serializer.data)


class RVModelViewSet(ModelViewSet):
     
     serializer_class = RVSerializer
     #queryset = RendezVous.objects.all()

     def get_queryset(self):
         rv = RendezVous.objects.all()
         return rv
     
     
     def create(self, request, *args, **kwargs):
          data = request.data
          new_client = Client.objects.create(nom = data["nom"], prenom = data["prenom"], email=data["email"], contact=data["contact"])
          new_client.save()

          new_rendez_vous = RendezVous.objects.create(client=new_client, objet=data["objet"], type=data["type"], message=data['message'], date=data["date"], heure=data["heure"])
          new_rendez_vous.save()

          serializer = RVSerializer(new_rendez_vous)
          return Response(serializer.data)