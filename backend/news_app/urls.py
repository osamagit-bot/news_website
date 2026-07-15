from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import  CategoryViewSet, NewsViewSet,CategoryDataViewSet

routers = DefaultRouter()
routers.register(r'news', NewsViewSet, basename='news'),
routers.register(r'categories', CategoryViewSet, basename="categories"),
routers.register(r'category_data' , CategoryDataViewSet, basename="category_data")
#routers.register(r'hero_content', HeroContentView, basename='hero_content')

urlpatterns = [
    path('', include(routers.urls)),
]