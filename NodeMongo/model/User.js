/**
 * New node file
 */

var  mongodb = require("mongodb");
 var monk = require('monk');
 var db = monk('localhost:27017/test');
 
 
 var findByUsername = function(uname,fn)
 {
	 var usercollection = db.get('usercollection');
	 usercollection.find({username:uname},function(error,users){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return fn(null, null);
			
			 }
		// success
		 console.log(users);
		 return fn(null, users[0]);
		 //console.log(users);
	 });
 };	 
 
 var findById = function(uid,fn)
 {
	 var usercollection = db.get('usercollection');
	 usercollection.findOne({_id:uid},function(error,user){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return fn(null, null);
			
			 }
		// success
		 console.log(user);
		 return fn(null, user);
		 //console.log(users);
	 });
 };	 

/*
findByUsername('ssubashs', function(err,user)
		{			
			console.log(user);
		});
	   
findByUsername('sfasdf', function(err,user)
		{			
			console.log(user);
		});	
	   
*/ 
 
 module.exports.findByUsername = findByUsername;
 module.exports.findById = findById;