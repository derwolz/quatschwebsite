from django.urls import path
from django.contrib import admin
from .models import *
from .forms import CSVUploadForm
from django.shortcuts import render
# Register your models here.

        
admin.site.register(Noun)
admin.site.register(Verb)
admin.site.register(SplitVerb)
admin.site.register(Adjective)
admin.site.register(Adverb)
admin.site.register(Preposition)
admin.site.register(Conjunction)