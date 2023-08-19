from rest_framework import serializers

from .models import Client, ContactezNous, RendezVous


class ClientSerializer(serializers.ModelSerializer):
     class Meta:
          model = Client
          fields = "__all__"


class CNSerializer(serializers.ModelSerializer):
     class Meta:
          model = ContactezNous
          fields = "__all__"


class RVSerializer(serializers.ModelSerializer):
     class Meta:
          model = RendezVous
          fields = "__all__"