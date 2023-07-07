"""
URL configuration for ReichstagRivals project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from dbmgmt import views
from django.conf import settings
from django.conf.urls.static import static
from blog import views as blogviews
urlpatterns = [
    path('admin/', admin.site.urls),
    path('qr_code/', views.generate_qr_code, name='generate_qr_code'),
    #path('random_noun/', views.get_random_noun, name='get_random_noun'),
    path('adjectives/', views.AdjectiveViewSet.as_view({'get':'list','post':'create'}), name='adjective_list'),
    path('adverbs/', views.AdverbViewSet.as_view({'get':'list','post':'create'}), name='verb_list'),
    path('nouns/', views.NounViewSet.as_view({'get':'list','post':'create'}), name='adjective_list'),
    #path('adjective/<int:pk>/', views.AdjectiveDetailView.as_view(), name='adjective_detail'),
    path('prepositions/', views.PrepositionViewSet.as_view({'get':'list','post':'create'}), name='preposition_list'),
    #path('preposition/<int:pk>/', views.PrepositionDetailView.as_view(), name='preposition_detail'),
    path('verbs/', views.VerbViewSet.as_view({'get':'list','post':'create'}), name='verb_list'),
    path('splitverbs/', views.SplitVerbViewSet.as_view({'get':'list','post':'create'}), name='verb_list'),
    path('conjunctions/', views.ConjunctionViewSet.as_view({'get':'list','post':'create'}), name='verb_list'),
    path('markdownx/', include('markdownx.urls')),
    #path('verb/<int:pk>/', views.VerbDetailView.as_view(), name='verb_detail'),
    #path('shopping_cart/', views.ShoppingCartView.as_view(), name='shopping_cart'),
    path('blog/', blogviews.BlogView.as_view(), name='blog'),
    path('blog/lastblog/', blogviews.LastBlogView.as_view(), name='last_blog'),
    path("getsentence/", views.generate_sentence),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
