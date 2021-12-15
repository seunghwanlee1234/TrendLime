from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song, Latest_100, Category, Tag, Song_without_year, Top11, Top11_like100, Song_with_meta_emotion, Label, Song_lyric_based_recommend10, Word_info_each_category, Word_info_each_topic
from search.serializers import UserSerializer, SongSerializer, Latest_100Serializer, TagSerializer, Song_without_yearSerializer, Top11Serializer, Top11_like100Serializer, Song_with_meta_emotionSerializer, LabelSerializer, Song_lyric_based_recommend10Serializer
# from detail.views import make_song_info_to_json

# Create your views here.

@csrf_exempt
def search(request):
  search_word = request.GET.get("q")
  selected_tag = request.GET.get("category") 
  tag_content = request.GET.get("tag") 
  topics = []
  songs = []  
  words_and_freq_list = []

  """
  scenario:
  1. 카테고리 태그에 따라 분류 - 트랜드/연도 카테고리
                        - 그외 카테고리
    2-1. 트렌드 카테고리를 고르면 - 트렌드와 연도 태그가 나오고
      3-1. 트렌드 태그를 고르면 최신 트랜드의 토픽정보, 토픽에 대한 단어 빈도수 정보, 대표곡 정보 나오고
      3-2. 연도 태그를 선택하면 해당연도의 곡 정보 해당 연도에 많이 사용된 단어 정보
    2-2. 그외의 카테고리 및 해당 카테고리 하위 태그를 고르면 해당 태그에 맞는 곡 정보 제공
  """
  # 트렌드/연도 카테고리를 선택하면 트렌드 + 1940~2010년대 태그가 나오고 
  if selected_tag == "트렌드/연도":
    # 트랜드/연도 카테고리의 트랜드 태그를 누르면 ....... 어떤게 나오지???
    if tag_content == "트렌드":
      # 최신 트렌드 토픽 단어 선정 선호 순위
      label_list = Label.objects.all()
      
      for label_data in label_list:
        label_id = label_data.label_id
        label_name = label_data.label_name

        words_and_freq = []
        topic_queryset_list = Word_info_each_topic.objects.filter(Topic = label_id)[:30]
        for queryset in topic_queryset_list:
          words_and_freq.append(make_json_word_freq(queryset))

        topics.append({
          "label_id" : label_id,
          "label_name" : label_name,
          "words_and_freq" : words_and_freq
        })

      # 최신 트렌드 곡 단어 빈도수
      queryset_list = Top11_like100.objects.filter(year__icontains = 2020)[:30]
      for queryset in queryset_list:
        words_and_freq_list.append(make_json_word_freq_year(queryset))
      
      # 최신 트렌드 대표곡 출력 
      represent_song_queryset_list = Song.objects.filter(year__icontains = 2020).order_by('-Like_Count')[:30]
      if represent_song_queryset_list.exists():
        for queryset in represent_song_queryset_list:
          songs.append(make_song_info_to_json_contains_year(queryset))
      else:
        songs.append(None) 

      context = {
        'topics' : topics,
        'words_and_freq' : words_and_freq_list,
        'songs' : songs 
      }
    # 연도 태그를 누르면 토픽에 대한 워드 클라우드와 top10 단어 리스트
    else:
      queryset_list = Top11.objects.filter(year__icontains = f'{tag_content}') 
      for queryset in queryset_list:
        words_and_freq_list.append(make_json_word_freq_year(queryset))

      # 연도별 대표곡 출력 
      represent_song_queryset_list = Song.objects.filter(year__icontains = f'{tag_content}').order_by('-Like_Count')
      if represent_song_queryset_list.exists():
        for queryset in represent_song_queryset_list:
          songs.append(make_song_info_to_json_contains_year(queryset))
      else:
        songs.append(None) 

      context = { 
        'words_and_freq' : words_and_freq_list,
        'songs' : songs 
      }

  # 트랜드/얀도 카테고리 외의 카테고리를 선택하면 일반적인 태그에 따라 필터링된 곡의 정보 표시
  else:
    # queryset_list1 = Song.objects.filter(song_name__icontains = f'{search_word}') 
    queryset_list2 = Song.objects.filter(tags__icontains = tag_content) 
    queryset_list3 = Word_info_each_category.objects.filter(category__icontains = tag_content)[:30]

    # if queryset_list1.exists and queryset_list2.exists:
    #   queryset_list = (queryset_list1 & queryset_list2).order_by('-Like_Count')#, 'year')
    # elif not queryset_list1.exists:
    #   queryset_list = queryset_list2.order_by('-Like_Count')
    # else:
    #   queryset_list = queryset_list1.order_by('-Like_Count')
    queryset_list = queryset_list2.order_by('-Like_Count')

    if queryset_list.exists():
      for queryset in queryset_list:
        songs.append(make_song_info_to_json_contains_year(queryset))
    else:
      songs.append(None) 

    if queryset_list3.exists():
      for queryset in queryset_list3:
        words_and_freq_list.append(make_json_word_freq(queryset))
    else:
      words_and_freq_list.append(None) 

    context = {
      "songs" : songs,
      "words_and_freq" : words_and_freq_list
    }
  return JsonResponse(context, status = 200)

@csrf_exempt
def categories_and_tags(request):
  result_list = []
  category_list = []
  tag_list =[]

  category_queryset = Category.objects.all()
  for data in category_queryset:
    category_list.append({
      'category_id' : data.category_id,
      'category_name' : data.category_name
    })

  tag_queryset = Tag.objects.all()
  for data in tag_queryset:
    tag_list.append({
      'category_id' : data.category_id,
      'category_name' : data.category_name,
      'tag_id' : data.tag_id,
      'tag_name' : data.tag_name,
      'tag_name_en' : data.tag_name_en,
    })

  result_list = { 
    'categories' : category_list,
    'tags' : tag_list
  }
  return JsonResponse(result_list, status=200)


def make_song_info_to_json_contains_year(listname):
  output = {
      'song_id' : listname.song_id,
      'song_name' : listname.song_name,
      'artist' : listname.artist,
      'album' : listname.album,
      'Like_Count' : listname.Like_Count,
      'Lyric' : listname.Lyric,
      'cover_url' : listname.cover_url,
      'tags' : listname.tags,
      'year' : listname.year
    }
  return output


def make_json_word_freq_year(queryset):
  result = {
    'word' : queryset.word,
    'freq' : queryset.freq,
    'year' : queryset.year
  }
  return result


def make_json_word_freq(queryset):
  result = {
    'word' : queryset.word,
    'freq' : queryset.freq,
  }
  return result


# DRF views
# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class SongViewSet(viewsets.ModelViewSet):
  queryset = Song.objects.all()
  serializer_class = SongSerializer

class Latest_100ViewSet(viewsets.ModelViewSet):
  queryset = Latest_100.objects.all()
  serializer_class = Latest_100Serializer

class Song_with_meta_emotionViewSet(viewsets.ModelViewSet):
  queryset = Song_with_meta_emotion.objects.all()
  serializer_class = Song_with_meta_emotionSerializer

class Song_without_yearViewSet(viewsets.ModelViewSet):
  queryset = Song_without_year.objects.all()
  serializer_class = Song_without_yearSerializer

class TagViewSet(viewsets.ModelViewSet):
  queryset = Tag.objects.all()
  serializer_class = TagSerializer

class LabelViewSet(viewsets.ModelViewSet):
  queryset = Label.objects.all()
  serializer_class = LabelSerializer

class Song_lyric_based_recommend10ViewSet(viewsets.ModelViewSet):
  queryset = Song_lyric_based_recommend10.objects.all()
  serializer_class = Song_lyric_based_recommend10Serializer

class Top11ViewSet(viewsets.ModelViewSet):
  queryset = Top11.objects.all().order_by('id')
  serializer_class = Top11Serializer

class Top11_like100ViewSet(viewsets.ModelViewSet):
  queryset = Top11_like100.objects.all().order_by('id')
  serializer_class = Top11_like100Serializer

