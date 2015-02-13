
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");

};

exports.userlist = function(req, res){
  	var db = req.db;
  	var user = req.user;
    console.log(" userlist request for " + user.username);
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.send(docs);
    });

};

exports.userdetail = function(req, res){
  	var db = req.db;
  	var user = req.user;
    console.log(" userlist request for " + user.username);  
    res.send(user);
  

};