
/*
 * GET users listing.
 */

var tweetsdb = require("../model/tweetsdb");

exports.recentTweets = function(req, res){
	var username = req.params.user;
	tweetsdb.recentTweets(username,5,function(tweets)
			{
				//console.log(tweets[0]);
				res.render('tweets', { title: 'Tweets', heading:'Most recent tweets',user:username, tweets:tweets });
			});
	
};