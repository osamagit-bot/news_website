from .models import  Category, News
from rest_framework import serializers
from django.utils.translation import get_language


# class LatestNewsSerializer(serializers.ModelSerializer):
#     image = serializers.SerializerMethodField()
#     published_at = serializers.DateTimeField(format="%B %d, %Y") 
#     news_title = serializers.SerializerMethodField()
#     description = serializers.SerializerMethodField()
#     news_category = serializers.SerializerMethodField()
#     class Meta:
#         model = LatestNews
#         fields = '__all__'




#     def get_news_title(self, obj):
#         return obj.safe_translation_getter('news_title', language_code=get_language())
#     def get_description(self, obj):
#         return obj.safe_translation_getter('description', language_code=get_language())
#     def get_news_category(self, obj):
#         return obj.category.safe_translation_getter('name', language_code=get_language())


#     def get_image(self, obj):
#         request = self.context.get('request')
#         if obj.image:
#             return request.build_absolute_uri(obj.image.url)
#         return None
    
# class HeroContentSerializer(serializers.ModelSerializer):
#     title = serializers.SerializerMethodField()
#     category = serializers.SerializerMethodField()
#     image = serializers.SerializerMethodField()
#     published_at = serializers.DateTimeField(format="%d %B, %Y")

#     class Meta:
#         model = HeroContent
#         fields=['id','title','category','published_by','published_at','image']
    
#     def get_title(self,obj):
#         return obj.safe_translation_getter('title', language_code = get_language())
    
#     def get_category(self, obj):
#         return obj.category.name
    
#     def get_image(self, obj):
#         request = self.context.get('request')
#         if obj.image:
#             return request.build_absolute_uri(obj.image.url)
#         return None


class NewsSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    published_at = serializers.DateTimeField(format="%d %B, %Y")

    class Meta:
        model = News
        fields = [
            'id',
            'title',
            'description',
            'category',
            'slug',
            'published_by',
            'published_at',
            'image',
            'is_hero',
        ]

    def get_title(self, obj):
        return obj.safe_translation_getter(
            'title',
            language_code=get_language()
        )

    def get_description(self, obj):
        return obj.safe_translation_getter(
            'description',
            language_code=get_language()
        )

    def get_category(self, obj):
        return obj.category.safe_translation_getter(
            'name',
            language_code=get_language()
        )

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None


    



class CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    button_text = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    article_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = [
            "id",
            "name",
            "image",
            "button_text",
            "article_count",
        ]

    def get_name(self, obj):
        return obj.safe_translation_getter(
            "name",
            language_code=get_language()
        )

    def get_button_text(self, obj):
        return obj.safe_translation_getter(
            "button_text",
            language_code=get_language()
        )

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None

    def get_article_count(self, obj):
        return obj.articles.count()
    


