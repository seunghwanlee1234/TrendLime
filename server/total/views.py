from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song, Latest_100, Category, Tag, Song_without_year, Top11, Top11_like100, Song_with_meta_emotion
# Create your views here.

@csrf_exempt
def get_result(request):
  search_word = request.GET.get("q")
  variable = ['song_name', 'artist', 'album']

  context = {
    "song_name" :  make_json(variable[0], search_word),
    "artist" : make_json(variable[1], search_word),
    "album" : make_json(variable[2], search_word)
  }

  return JsonResponse(context , status = 200)

@csrf_exempt
def get_result_top_3(request):
  search_word = request.GET.get("q")
  variable = ['song_name', 'artist', 'album']

  context = {
    "song_name" :  make_json3(variable[0], search_word),
    "artist" : make_json3(variable[1], search_word),
    "album" : make_json3(variable[2], search_word)
  }

  return JsonResponse(context , status = 200)


def make_json(listname, search_word):
  result_list = []
  fieldname_icontains = listname + '__icontains'
  queryset_list = Song_without_year.objects.filter(**{fieldname_icontains : search_word}).order_by('-Like_Count')

  if queryset_list.exists():
      for queryset in queryset_list:
        result_list.append({
          'song_id' : queryset.song_id,
          'song_name' : queryset.song_name,
          'artist' : queryset.artist,
          'album' : queryset.album,
          'Like_Count' : queryset.Like_Count,
          'Lyric' : queryset.Lyric,
          'cover_url' : queryset.cover_url,
          'tags' : queryset.tags,
          # 'year' : queryset.year,
        })
  else:
    result_list.append(None) 

  return result_list


def make_json3(listname, search_word):
  result_list = []
  fieldname_icontains = listname + '__icontains'
  queryset_list = Song_without_year.objects.filter(**{fieldname_icontains : search_word}).order_by('Like_Count')[:3]

  if queryset_list.exists():
      for queryset in queryset_list:
        result_list.append({
          'song_id' : queryset.song_id,
          'song_name' : queryset.song_name,
          'artist' : queryset.artist,
          'album' : queryset.album,
          'Like_Count' : queryset.Like_Count,
          'Lyric' : queryset.Lyric,
          'cover_url' : queryset.cover_url,
          'tags' : queryset.tags,
          # 'year' : queryset.year,
        })
  else:
    result_list.append(None) 

  return result_list