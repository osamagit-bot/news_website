from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import LatestNewsViewSet, CategoryViewSet, HeroContentView

routers = DefaultRouter()
routers.register(r'latest-news', LatestNewsViewSet, basename='latest-news'),
routers.register(r'categories', CategoryViewSet, basename="categories"),
routers.register(r'hero_content', HeroContentView, basename='hero_content')

urlpatterns = [
    path('', include(routers.urls)),
]