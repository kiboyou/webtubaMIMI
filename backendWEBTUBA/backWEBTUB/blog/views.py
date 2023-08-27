from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from .models import Blog
from .serializer import BlogSerializer



class BlogModelViewSet(ModelViewSet):
     
     serializer_class = BlogSerializer
     queryset = Blog.objects.all()
