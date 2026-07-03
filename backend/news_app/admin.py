from django.contrib import admin
from .models import LatestNews, Category, HeroContent
from parler.admin import TranslatableAdmin

# Register your models here.

@admin.register(LatestNews)
class LatestNewsAdmin(TranslatableAdmin):
    list_display = ('get_title', 'category','get_description', 'published_by', 'published_at')
    search_fields = ('translations__news_title', 'category__translations__name')

    def get_title(self, obj):
        return obj.safe_translation_getter('news_title', any_language=True)
    def get_description(self, obj):
        return obj.safe_translation_getter('description', any_language=True)

    get_title.short_description = "News_Title"
    get_description.short_description = "News_Description"

@admin.register(Category)
class CategoryAdmin(TranslatableAdmin):
    list_display = ('name', 'button_text')
    search_fields = ('translations__name',)

@admin.register(HeroContent)
class HeroContentAdmin(TranslatableAdmin):
    list_display = ['title','category','published_by','published_at','image']
    search_fields = ['translations__title']



