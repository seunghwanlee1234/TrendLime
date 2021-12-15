"""Config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from rest_framework import routers

from search.views import UserViewSet, SongViewSet, Latest_100ViewSet, Song_with_meta_emotionViewSet, Song_without_yearViewSet, TagViewSet, Top11ViewSet, Top11_like100ViewSet, search, categories_and_tags, LabelViewSet, Song_lyric_based_recommend10ViewSet
from detail.views import detail, recommend_song_info, topic_based_info, emotion_based_info
from total.views import get_result, get_result_top_3


# Routers provide an easy way of automatically determining the URL conf.
upperrouter = routers.DefaultRouter()
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'songs', SongViewSet)
router.register(r'latest_100', Latest_100ViewSet)
router.register(r'song_with_meta_emotion', Song_with_meta_emotionViewSet)
router.register(r'songs_without_year', Song_without_yearViewSet)
router.register(r'top11', Top11ViewSet)
router.register(r'top11_like100', Top11_like100ViewSet)
router.register(r'label', LabelViewSet)
router.register(r'song_lyric_based_recommend10', Song_lyric_based_recommend10ViewSet)
# router.register(r'tags', TagViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth', include('rest_framework.urls')),
    path('api/tags', categories_and_tags, name='categories_and_tags'),
    path('api/search', search, name='search'),
    path('api/search/total/', get_result, name='get_result'),
    path('api/search/total3/', get_result_top_3, name='get_result_top_3'),
    path('api/song/', detail, name='song'),
    path('api/recommend/', recommend_song_info, name='recommend'),
    path('api/topic/', topic_based_info, name='topic'),
    path('api/emotion/', emotion_based_info, name='emotion'),
]
