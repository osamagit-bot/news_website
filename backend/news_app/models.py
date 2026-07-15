from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from django.utils.text import slugify

class Category(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=100, default='General'),
        button_text=models.CharField(
            max_length=50,
            default='Explore More'
        ),
        short_description = models.CharField(max_length=300, default='Sports, Economic, World')
      
    )
    image = models.ImageField(upload_to='category_images/', default='Image')

    def __str__(self):
        # Try to get the name in the current language
        name = self.safe_translation_getter('name', any_language=True)
        # Return a default if name is None or empty
        return name if name else f"Category {self.id}"


class News(TranslatableModel):

    translations = TranslatedFields(
        slug = models.SlugField(unique=True, blank=True),
        title=models.CharField(max_length=255),
        description=models.TextField()
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE, related_name='articles'
    )

    image = models.ImageField(upload_to='news/')
    published_by = models.CharField(max_length=100, default='Admin')
    published_at = models.DateTimeField(auto_now_add=True)

    is_hero = models.BooleanField(default=False)


    def save(self, *args, **kwargs):
        if not self.slug:
            title = self.safe_translation_getter("title", any_language=True)
            self.slug = slugify(title)
        super().save(*args, **kwargs)







# class LatestNews(TranslatableModel):

#     CATEGORY_CHOICES = [
#         ('World', 'World'),
#         ('Politics', 'Politics'),
#         ('Business', 'Business'),
#         ('Technology', 'Technology'),
#         ('Entertainment', 'Entertainment'),
#         ('Sports', 'Sports'),
#         ('Science', 'Science'),
#         ('Health', 'Health'),
#         ('Travel', 'Travel'),
#         ('Lifestyle', 'Lifestyle'),
#         ('Music', 'Music'),
#         ('Food', 'Food'),
#     ]

#     translations = TranslatedFields(
#         news_title = models.CharField(max_length=255, default='First News Title'),
#         description = models.TextField()
#   )
#     category = models.ForeignKey(
#     Category,
#     on_delete=models.CASCADE,
#     related_name='articles'
# )
    
#     image = models.ImageField(upload_to='news_images/')
#     published_by = models.CharField(max_length=255, default='Admin')
#     published_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.safe_translation_getter('news_title', any_language=True)
    



# class HeroContent(TranslatableModel):
   
#     translations = TranslatedFields(
#         title = models.CharField(max_length=255, default='First Hero News'),
#         category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='hero_articles')
#             )
#     image = models.ImageField(upload_to='hero_images/', default='hero_image')
#     published_by = models.CharField(max_length=100, default="Admin")
#     published_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#       return self.safe_translation_getter('title', any_language = True)


# class AllNews(TranslatableModel):
#    translations = TranslatedFields(
#       title = models.ForeignKey(HeroContent, LatestNews)

#    )



class CategoryData(models.Model):
    name=models.CharField(max_length=100, default='General')
    button_text=models.CharField(
            max_length=50,
            default='Explore More'
        )

    short_description = models.CharField(max_length=300, default='Sports, Economic, World')

    def __str__(self):
        return self.name