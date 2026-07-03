from django.shortcuts import render
from .models import LatestNews, Category, HeroContent
from .serializers import LatestNewsSerializer, CategorySerializer, HeroContentSerializer
from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from django.utils.translation import activate

    
# Create your views here.
class LatestNewsViewSet(ModelViewSet):
    queryset = LatestNews.objects.all()
    serializer_class = LatestNewsSerializer

    def get_queryset(self):
        language = self.request.headers.get("Accept-Language", "en")
        activate(language)

        return LatestNews.objects.language(language).all()

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context   

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_queryset(self):
        language = self.request.headers.get("Accept-Language", "en")
        activate(language)

        return Category.objects.language(language).all()

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context
    

class HeroContentView(ModelViewSet):
    queryset = HeroContent.objects.all()
    serializer_class= HeroContentSerializer
    
    def get_queryset(self):
        language = self.request.headers.get("Accept-Language", "en")
        activate(language)
        return HeroContent.objects.language(language).all()
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context
