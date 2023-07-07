from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from .models import Blog, BlogImage
from .serializers import BlogSerializer, BlogImageSerializer
from rest_framework import generics
from .Pagination import BlogPagination
# Create your views here.
class BlogView(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    pagination_class = BlogPagination
    def post(self, request, *args, **kwargs):
        blog_data = request.data
        blog_serializer = BlogSerializer(data=blog_data)
        if blog_serializer.is_valid():
            blog = blog_serializer.save()
            return Response(blog)
        
class BlogImageView(APIView):
    def get(self, request, *args, **kwargs):
        blogImages = BlogImage.objects.all()
        serializer = BlogImageSerializer(blogImages)
    def post(self, request, *args, **kwargs):
        ImageData=request.data
        ImageSerailizer = BlogImageSerializer(data=ImageData)
        if ImageSerailizer.is_valid():
            blogImage = ImageSerailizer.save()
            return Response(blogImage)
        
class LastBlogView(APIView):
    def get(self, request, *args, **kwargs):
        last_blog = Blog.objects.order_by('-id').first()
        serializer = BlogSerializer(last_blog)
        return Response(serializer.data)
    
