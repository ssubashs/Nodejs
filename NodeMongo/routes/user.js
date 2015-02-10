
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");

};

exports.userlist = function(req, res){
  	var db = req.db;
   // console.log(db);
    var collection = db.get('user');
    collection.find({},{},function(e,docs){
        res.send(docs);
    });

};