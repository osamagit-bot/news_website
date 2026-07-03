from django.db import models
from parler.models import TranslatableModel, TranslatedFields

class Category(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=100, default='General'),
        button_text=models.CharField(
            max_length=50,
            default='Explore More'
        )
      
    )
    image = models.ImageField(upload_to='category_images/', default='Image')

    def __str__(self):
     return self.safe_translation_getter('name', any_language=True)
    


class LatestNews(TranslatableModel):

    CATEGORY_CHOICES = [
        ('World', 'World'),
        ('Politics', 'Politics'),
        ('Business', 'Business'),
        ('Technology', 'Technology'),
        ('Entertainment', 'Entertainment'),
        ('Sports', 'Sports'),
        ('Science', 'Science'),
        ('Health', 'Health'),
        ('Travel', 'Travel'),
        ('Lifestyle', 'Lifestyle'),
        ('Music', 'Music'),
        ('Food', 'Food'),
    ]

    translations = TranslatedFields(
        news_title = models.CharField(max_length=255, default='First News Title'),
        description = models.TextField()
  )
    category = models.ForeignKey(
    Category,
    on_delete=models.CASCADE,
    related_name='articles'
)
    
    image = models.ImageField(upload_to='news_images/')
    published_by = models.CharField(max_length=255, default='Admin')
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.safe_translation_getter('news_title', any_language=True)
    



class HeroContent(TranslatableModel):
   
    translations = TranslatedFields(
        title = models.CharField(max_length=255, default='First Hero News'),
        category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='hero_articles')
            )
    image = models.ImageField(upload_to='hero_images/', default='hero_image')
    published_by = models.CharField(max_length=100, default="Admin")
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
      return self.safe_translation_getter('title', any_language = True)

