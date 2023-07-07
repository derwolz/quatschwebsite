from django.db import models
from PIL import Image
from markdownx.models import MarkdownxField
# Create your models here.
class BlogImage(models.Model):
    image = models.ImageField(upload_to='blog_images')
    
class Blog(models.Model):
    title = models.CharField()
    content = MarkdownxField()
    created_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ["created_date"]