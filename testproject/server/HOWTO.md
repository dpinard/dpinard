### connect terminal db
mongosh
use 'name DB'
db.users.find()
db.users.drop()
exit

pronostat> db.users.aggregate([{$lookup:{from: 'setgroups', localField:'ofCourse1', foreignField:'_id', as:'ddo'}}])
