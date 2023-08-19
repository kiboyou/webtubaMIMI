from django.contrib import admin

# Register your models here.

from .models import Client, RendezVous, ContactezNous


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'email', 'contact')
    list_filter = ('nom', 'prenom', 'email', 'contact')
    search_fields = ('nom', 'prenom', 'email', 'contact')



@admin.register(ContactezNous)
class CNAdmin(admin.ModelAdmin):
    list_display = ('client', 'message')
    list_filter = ('client', 'message')
    search_fields = ('client', 'message')



@admin.register(RendezVous)
class RVAdmin(admin.ModelAdmin):
    list_display = ('client', 'objet', 'type', 'message', 'date', 'heure')
    list_filter = ('client', 'objet', 'type', 'message','date', 'heure')
    search_fields = ('client', 'objet', 'type', 'message','date', 'heure')