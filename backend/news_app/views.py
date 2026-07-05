from django.shortcuts import render
from .models import  Category, News
from .serializers import CategorySerializer,  NewsSerializer
from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from django.utils.translation import activate
from rest_framework.decorators import action
from rest_framework.response import Response

    
# Create your views here.
# class LatestNewsViewSet(ModelViewSet):
#     queryset = LatestNews.objects.all()
#     serializer_class = LatestNewsSerializer

#     def get_queryset(self):
#         language = self.request.headers.get("Accept-Language", "en")
#         activate(language)

#         return LatestNews.objects.language(language).all()

#     def get_serializer_context(self):
#         context = super().get_serializer_context()
#         context['request'] = self.request
#         return context   
# class HeroContentView(ModelViewSet):
#     queryset = HeroContent.objects.all()
#     serializer_class= HeroContentSerializer
    
#     def get_queryset(self):
#         language = self.request.headers.get("Accept-Language", "en")
#         activate(language)
#         return HeroContent.objects.language(language).all()
    
#     def get_serializer_context(self):
#         context = super().get_serializer_context()
#         context["request"] = self.request
#         return context



class NewsViewSet(ModelViewSet):
    serializer_class = NewsSerializer

    def get_queryset(self):
        language = self.request.headers.get("Accept-Language", "en")
        activate(language)
        return News.objects.language(language).order_by("-published_at")

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    @action(detail=False, methods=["get"])
    def hero(self, request):
        queryset = self.get_queryset().filter(is_hero=True)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def latest(self, request):
        queryset = self.get_queryset().filter(is_hero=False)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)



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
    

