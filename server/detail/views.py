from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from django.http import JsonResponse
from django.db import connection
import json

from django.contrib.auth.models import User
from search.models import Song, Latest_100, Category, Tag, Song_without_year, Top11, Top11_like100, Song_with_meta_emotion ,Label, Song_lyric_based_recommend10, Word_info_each_topic
from search.views import make_json_word_freq

# Create your views here.

# 단일 노래 기본 정보 제공
@csrf_exempt
def detail(request):
  song_id = request.GET.get("song_id")
  single_song_info_queryset = Song_without_year.objects.filter(song_id = f'{song_id}')
  single_song_info = make_song_info_to_json(single_song_info_queryset)

  return JsonResponse(single_song_info , status = 200 ,safe= False)


### 아직 미작성된 부분!
# tf-idf 기반 가사와 유사한 노래 리스트 제공
@csrf_exempt
def recommend_song_info(request):
  song_id = request.GET.get("song_id")
  recommend_songs_list = Song_lyric_based_recommend10.objects.filter(rec = song_id)

  recommend_songs = []
  if recommend_songs_list.exists:
    for recommend_song in recommend_songs_list:
      song_info = Song_without_year.objects.filter(song_id = recommend_song.song_id).order_by('-Like_Count')
      for topic_related_song_info in song_info:
        recommend_songs.append({
          'song_id' : topic_related_song_info.song_id,
          'song_name' : topic_related_song_info.song_name,
          'artist' : topic_related_song_info.artist,
          'album' : topic_related_song_info.album,
          'Like_Count' : topic_related_song_info.Like_Count,
          'Lyric' : topic_related_song_info.Lyric,
          'cover_url' : topic_related_song_info.cover_url,
          'tags' : topic_related_song_info.tags,
        })

  print(recommend_songs)
  context = {
    "recommend_songs" : recommend_songs
  }
  return JsonResponse(context , status = 200,safe= False)


### 데이가 일부 없어서 구현 못한 부분 있음
# 토픽 모델링 기반 노래 정보 제공
@csrf_exempt
def topic_based_info(request):
  song_id = request.GET.get("song_id")
  topic_based_info_queryset = Song_without_year.objects.filter(song_id__icontains = f'{song_id}')
  words_freq = []

  if topic_based_info_queryset:
    for data in topic_based_info_queryset:
      topic_type = data.Topic
  else:
    topic_type = None

  topic_info = Label.objects.filter(label_id = topic_type)
  if topic_info:
    for data in topic_info:
      topic_name = data.label_name
  else : 
    topic_name = None
    
  words_freq_queryset_list = Word_info_each_topic.objects.filter(Topic = topic_type).order_by('-freq')[:30]
  if words_freq_queryset_list:
    for data in words_freq_queryset_list:
      words_freq.append({
        'Topic': data.Topic,
        'word' : data.word,
        'freq' : data.freq,
      })
  else:
    words_freq.append({
        'Topic': None,
        'word' : None,
        'freq' : None,
      })

  topic_related_song_info_list = Song_without_year.objects.filter(Topic = topic_type).order_by('-Like_Count')[:10]
  topic_related_song = make_song_info_to_json(topic_related_song_info_list)

  context = {
    "topic" : {
      "label_id" : topic_type,
      "label" : topic_name,
		  "words_freq" : words_freq,#[{word: , count: }, {word: , count: }, {}] //토픽에 속한 단어들, count
      "song": topic_related_song
    }
  }
  return JsonResponse(context , status = 200,safe= False)


# 노래에 대한 감정 분류 정보 제공
@csrf_exempt
def emotion_based_info(request):
  song_id = request.GET.get("song_id")

  emotion_based_info_queryset = Song_with_meta_emotion.objects.filter(song_id = song_id)
  print('emotion_based_info_queryset',emotion_based_info_queryset)

  if emotion_based_info_queryset:
    for data in emotion_based_info_queryset:
      emotion_based_song_info = {
        'emotion' : data.emotion,
        'percentage' : data.percentage,
      }
  else:
    emotion_based_song_info = {
        'emotion' : None,
        'percentage' : None,
      }
  context = {
    "emotion" : emotion_based_song_info
  }
  return JsonResponse(context , status = 200,safe= False)


def make_song_info_to_json(listname):
  output = []
  if listname:
    for topic_related_song_info in listname:
      output.append({
        'song_id' : topic_related_song_info.song_id,
        'song_name' : topic_related_song_info.song_name,
        'artist' : topic_related_song_info.artist,
        'album' : topic_related_song_info.album,
        'Like_Count' : topic_related_song_info.Like_Count,
        'Lyric' : topic_related_song_info.Lyric,
        'cover_url' : topic_related_song_info.cover_url,
        'tags' : topic_related_song_info.tags,
      })
  else:
    output.append({
        'song_id' : None,
        'song_name' : None,
        'artist' : None,
        'album' : None,
        'Like_Count' : None,
        'Lyric' : None,
        'cover_url' : None,
        'tags' : None,
    })
  return output