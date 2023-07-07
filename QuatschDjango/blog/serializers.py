from rest_framework import serializers
from .models import Blog, BlogImage
from markdownx.utils import markdownify
class BlogImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    class Meta:
        model = BlogImage
        fields = ('id', 'image', 'image_url')
    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image.url)
        return None
    
class BlogSerializer(serializers.ModelSerializer):
    content = serializers.SerializerMethodField()
    class Meta:
        model = Blog
        fields = ('id', 'title', 'content', "created_date")

    def get_content(self, obj):
        return markdownify(obj.content)
    def get_title(self, obj):
        return obj.title
    def get_date(self, obj):
        return obj.created_date.date().isoformat()
        