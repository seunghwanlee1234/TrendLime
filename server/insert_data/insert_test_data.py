
mongoimport --db=trend_lime_db --collection=tb_song --type=csv --headerline --file=songs_with_years.csv --columnsHaveTypes --drop
mongoimport --db=trend_lime_db --collection=tb_song_without_year --type=csv --headerline --file=songs_without_year.csv --columnsHaveTypes --drop
mongoimport --db=trend_lime_db --collection=tb_tag --type=csv --headerline --file=tags.csv --columnsHaveTypes --drop
mongoimport --db=trend_lime_db --collection=tb_top11 --type=csv --headerline --file=top11.csv --columnsHaveTypes --drop
mongoimport --db=trend_lime_db --collection=tb_top11_like100 --type=csv --headerline --file=top11_like100.csv --columnsHaveTypes --drop
## 인서트 에러날 경우 mongodb에서 db.my_coll.dropIndexes() 하고 위의 명령어 다시 실행하면 됨

## TypeError: Object of type type is not JSON serializable  이런 에러가 발생할 경우 csv 파일을 열어 속성을 지정해주면 해결됨
# db.tb_song_without_year.aggregate([{ $lookup:{ from:"tb_song", localField:"song_id", foreignField:"song_id", as:"year" } }])



# db.tb_song_without_year.aggregate([ 
#   { 
#     $lookup: { 
#       from: "tb_song", 
#       localField: "song_id", 
#       foreignField:"song_id", 
#       as: "year" 
#     }
#   } 
# ]).pretty()



# db.tb_song_without_year.aggregate([ 
#   {   
#     $lookup:     
#       {       
#         from:"tb_song",       
#         let:{song_id:"$song_id"},       
#         pipeline:
#           [         
#             { $match:           
#               {
#                 $expr:             
#                   {
#                     $and:
#                     [
#                       {               
#                         $eq:["$song_id","$$song_id"]
#                       },
#                       {
#                         $
#                       }
#                     ]
#                   }           
#               }         
#             },       
#             {$project: {year:1}}
#           ],
#           as: "year+" 
#       }  
#   }
# ]).pretty()
