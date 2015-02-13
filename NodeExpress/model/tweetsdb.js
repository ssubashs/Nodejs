/**
 * New node file
 */
var mongoconfig = require('../model/mongoconfig');

var recentTweets = function(uname,count,callback)
{
	var tweetcollection = mongoconfig.db.get('tweets');
		tweetcollection.find({username:uname},{"limit":count,"sort":{"_id":-1}},function(error,tweets){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success
		 console.log('retreived tweets' + tweets);
		 return callback(tweets);
		 //console.log(users);
	 });
};


module.exports.recentTweets = recentTweets; 