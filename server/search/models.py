from django.db import models

# Create your models here.

class Song(models.Model):  
  """
    Attributes:
        * song_id (string) : song_id
        * song_name (string) : 노래제목
        * artist (string) : 가수
        * album (string) : 앨범
        * Like_Count (string) : 좋아요수
        * Lyric (string) : 가사
        * cover_url (string) : 앨범커버
        * youtube_url (string) : 유튜브주소
        * tags : 태그들 
        * year : 발매년도
  """     
  Topic = models.CharField(max_length=100)
  Percentage = models.CharField(max_length=100)
  song_id = models.CharField(max_length=100)
  song_name = models.CharField(max_length=100)
  artist = models.CharField(max_length=100)
  album = models.CharField(max_length=100)
  Like_Count = models.CharField(max_length=50)
  Lyric = models.CharField(max_length=500)
  cover_url = models.CharField(max_length=200)
  # youtube_url = models.CharField(max_length=200)
  tags = models.CharField(max_length=500)
  year = models.CharField(max_length=4)

  class Meta:
    verbose_name = 'song'
    verbose_name_plural = 'songs'
    db_table = 'tb_song'
    # ordering = 'song_name'

  def __str__(self):
    return self.song_id


class Latest_100(models.Model):
  Topic = models.CharField(max_length=100)
  Percentage = models.CharField(max_length=100)
  song_id = models.CharField(max_length=100)
  song_name = models.CharField(max_length=100)
  artist = models.CharField(max_length=100)
  album = models.CharField(max_length=100)
  Like_Count = models.CharField(max_length=100)
  Lyric = models.CharField(max_length=100)
  cover_url = models.CharField(max_length=100)
  tags = models.CharField(max_length=100)
  year = models.CharField(max_length=100)


  class Meta:
    verbose_name = 'latest_100'
    db_table = 'tb_latest_100'
    # ordering = 'song_name'

  def __str__(self):
    return self.song_id


class Song_with_meta_emotion(models.Model):
  emotion = models.CharField(max_length=100)
  percentage = models.CharField(max_length=100)
  song_id = models.CharField(max_length=100)
  song_name = models.CharField(max_length=100)
  artist = models.CharField(max_length=100)
  album = models.CharField(max_length=100)
  Like_Count = models.CharField(max_length=100)
  Lyric = models.CharField(max_length=100)
  cover_url = models.CharField(max_length=100)
  tags = models.CharField(max_length=100)
  year = models.CharField(max_length=100)

  class Meta:
    verbose_name = 'song_with_meta_emotion'
    db_table = 'tb_song_with_meta_emotion'
    # ordering = 'song_name'

  def __str__(self):
    return self.song_id


class Song_without_year(models.Model):  
  """
    Attributes:
        * Topic :
        * Percentage : 
        * song_id (string) : song_id
        * song_name (string) : 노래제목
        * artist (string) : 가수
        * album (string) : 앨범
        * Like_Count (string) : 좋아요수
        * Lyric (string) : 가사
        * cover_url (string) : 앨범커버
        * youtube_url (string) : 유튜브주소
        * tags : 태그들 
  """     
  Topic = models.CharField(max_length=100)
  Percentage = models.CharField(max_length=100)
  song_id = models.CharField(max_length=100)
  song_name = models.CharField(max_length=100)
  artist = models.CharField(max_length=100)
  album = models.CharField(max_length=100)
  Like_Count = models.CharField(max_length=50)
  Lyric = models.CharField(max_length=500)
  cover_url = models.CharField(max_length=200)
  # youtube_url = models.CharField(max_length=200)
  tags = models.CharField(max_length=500)


  class Meta:
    verbose_name = 'song_withoout_year'
    verbose_name_plural = 'songs_withoout_year'
    db_table = 'tb_song_without_year'
    # ordering = 'song_name'

  def __str__(self):
    return self.song_id

class Category(models.Model):  

  category_id = models.CharField(max_length=100)
  category_name = models.CharField(max_length=100)

  class Meta:
    verbose_name = 'category'
    verbose_name_plural = 'categories'
    db_table = 'tb_category'
    # ordering = 'song_name'

  def __str__(self):
    return self.category_id

class Tag(models.Model):  
  """
    Attributes:
      * category_id : 상위 태그(카테고리) id 
      * category_name : 상위 태그(카테고리) 이름
        - 뮤직 스타일 : 1
        - 계절 : 2
        - 시간 : 3
        - 날씨 : 4
        - 상황/장소 : 5
        - 감정/기분 : 6
      * tag_id : 태그 id
      * tag_name : 태그이름
        - 뮤직 스타일
          - exciting (string) : 신나는 
          - ballad (string) : 발라드한
          - grooved (string) : 그루브한
          - emotional (string) : 감성적인
          - acoustic (string) : 어쿠스틱한
          - electronic (string) : 일렉트로닉
          - sweet (string) : 달달한
          - dreamy (string) : 몽환적인
          - strong (string) : 강한
          - windless (string) : 잔잔한
          - oldies (string) : 올디스
          - sad (string) : 애절한
          - sensual (string) : 감각적인
          - sexy (string) : 섹시한
          - lonesome (string) : 쓸쓸한
          - soulful (string) : 소울풀한
          - refreshing (string) : 청량한

        - 계절
          - spring (string) : 봄
          - summer (string) : 여름
          - autumn (string) : 가을
          - winter (string) : 겨울

        - 시간
          - morning (string) : 아침
          - afternoon (string) : 오후
          - dinner (string) : 저녁
          - night_dawn (string) : 밤/새벽

        - 날씨
          - sunny (string) : 화창한날
          - rain_cloudy (string) : 비/흐림
          - snowy (string) : 눈오는날
          - after_rain_clear (string) : 비온후/맑게갠
          - cool (string) : 선선한
          - chilly (string) : 쌀쌀한

        - 상황/장소
          - drive (string) : 드라이브
          - exercise_health (string) : 운동/헬스
          - on_the_way_to_school (string) : 등교/출근길
          - on_the_way_home (string) : 하교/퇴근길
          - relaxation_meditation (string) : 휴식/명상
          - club_party (string) : 클럽/파티
          - cafe (string) : 카페
          - karaoke (string) : 노래방
          - in_the_reading_room (string) : 산책/여행
          - walk_trip (string) : 사무실
          - office (string) : 편집숍/매장
          - select_shop_store (string) : 독서방안에서
          - hotel_bar (string) : 호텔/바
          - before_sleeping (string) : 잠들기전
          - marriage (string) : 결혼
          - festival (string) : 페스티벌
          - fashion_show (string) : 패션쇼
          - eat_alone (string) : 혼술혼밥
          - when_studying (string) : 공부할때

        - 감정/기분
          - love_joy (string) : 사랑/기쁨
          - farewell_sad (string) : 이별/슬픔
          - stress_irritability (string) : 스트레스/짜증
          - when_depressed (string) : 우울할때
          - when_you_are_tired (string) : 지치고힘들때
          - mental_anxiety (string) : 멘붕/불안
          - longing (string) : 그리움
          - when_youre_lonely (string) : 외로울때
          - something (string) : 썸탈때
          - ask_out (string) : 고백
          - when_you_want_to_cry (string) : 울고싶을때
          - dawn (string) : 새벽감성
          - bubbly (string) : 싱숭생숭
          - excitement_heart (string) : 설렘/심쿵
          - diversion (string) : 기분전환
          - healing (string) : 힐링
  """     
  category_id = models.CharField(max_length=100)
  category_name = models.CharField(max_length=100)
  tag_id = models.CharField(max_length=100)
  tag_name = models.CharField(max_length=100)
  tag_name_en = models.CharField(max_length=100)

  class Meta:
    verbose_name = 'tag'
    verbose_name_plural = 'tags'
    db_table = 'tb_tag'

  def __str__(self):
    return self.tag_id

class Word_info_each_category(models.Model):
  '''
    word
    freq
    category
  '''
  word = models.CharField(max_length=100)
  freq = models.CharField(max_length=100)
  category = models.CharField(max_length=100)

  class Meta:
    verbose_name = 'word_info'
    db_table = 'tb_word_info_each_category'

  def __str__(self):
    return self.word


class Word_info_each_topic(models.Model):
  """
    Attributes:
      * Topic : 주제
      * word : 단어
      * freq : 빈도
  """

  Topic = models.CharField(max_length=100)
  word = models.CharField(max_length=100)
  freq = models.CharField(max_length=4)
  class Meta:
    verbose_name = 'word_info_each_topic'
    db_table = 'tb_word_info_each_topic'

  def __str__(self):
    return self.word


class Label(models.Model):
  """
    Attributes:
      * label_id : 라벨아이디
      * label_name : 라벨명
  """

  label_id = models.CharField(max_length=100)
  label_name = models.CharField(max_length=100)
  
  class Meta:
    verbose_name = 'label'
    db_table = 'tb_label'

  def __str__(self):
    return self.label_id


class Top11(models.Model):
  """
    Attributes:
      * word : 단어
      * freq : 빈도
      * year : 발매년도
  """

  word = models.CharField(max_length=100)
  freq = models.CharField(max_length=100)
  year = models.CharField(max_length=4)
  class Meta:
    verbose_name = 'top11'
    db_table = 'tb_top11'

  def __str__(self):
    return self.word


class Top11_like100(models.Model):
  """
    Attributes:
      * word : 단어
      * freq : 빈도
      * year : 발매년도
  """

  word = models.CharField(max_length=100)
  freq = models.CharField(max_length=100)
  year = models.CharField(max_length=4)
  class Meta:
    verbose_name = 'top11_like100'
    db_table = 'tb_top11_like100'

  def __str__(self):
    return self.word


class Song_lyric_based_recommend10(models.Model):
  """
    Attributes:
      * song_id : 
      * song_name : 
      * artist : 
      * Lyric : 
      * year : 
      * score : cos-similarity 점수
      * rec : 관련곡 id
  """
  song_id = models.CharField(max_length=100)
  song_name = models.CharField(max_length=100)
  artist = models.CharField(max_length=100)
  Lyric = models.CharField(max_length=100)
  year = models.CharField(max_length=100)
  score = models.CharField(max_length=100)
  rec = models.CharField(max_length=100)

  class Meta:
    verbose_name = 'song_lyric_based_recommend10'
    db_table = 'tb_song_lyric_based_recommend10'

  def __str__(self):
    return self.rec
'''
-User-

{ 
  "_id" : ObjectId("619c7b9dea1a98014163fdac"), 
  "id" : 1, 
  "password" : "pbkdf2_sha256$260000$m4cAhqddW0OcKdQftP94ad$jRWaz9zKIQGWrEqSDzc/cFAr/qw37/acAhPHxxXioW0=", 
  "last_login" : ISODate("2021-11-23T14:27:07.667Z"), 
  "is_superuser" : true, 
  "username" : "admin", 
  "first_name" : "", 
  "last_name" : "", 
  "email" : "", 
  "is_staff" : true, 
  "is_active" : true, 
  "date_joined" : ISODate("2021-11-23T14:26:53.696Z") }
'''
