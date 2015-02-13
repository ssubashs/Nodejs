/**
 * New node file
 */
var mongo = require('mongodb');
var host =  '127.0.0.1';
var port = '27017';
var db  = new mongo.Db("test", new mongo.Server(host,port,{}));
db.open(function(error){
	console.log("connected to mongodb collections "+ host +":"+port);
	db.collection("usercollection",function(error,collection){
		console.log("collection is ready");
		collection.insert({
			firstname:'Subash',
			lastname:'Soundrapandi',
			username:'ssubashs',
			twitter:'sstweets',
			email:'ss@sam.com'
		},function()
		{
			console.log('inserted ssubashs');
			
		}
		
		);
		
		collection.insert({
			firstname:'Karpaga',
			lastname:'Rajadurai',
			username:'arkalpa',
			twitter:'arkalpa_Tweets',
			email:'arkalpa@sam.com'
		},function()
		{
			console.log('inserted arkalpa');
			
		}
		
		);
		
	});
});