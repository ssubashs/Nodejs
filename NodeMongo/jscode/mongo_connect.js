/**
 * New node file
 */
var mongo = require('mongodb');
var host =  '127.0.0.1';
var port = '27017';
var db  = new mongo.Db("test", new mongo.Server(host,port,{}));
db.open(function(error){
	console.log("connected to mongodb collections "+ host +":"+port);
	db.collection("user",function(error,collection){
		console.log("collection is ready");
		collection.insert({personal:{firstname:'Subash',lastname:'Soundrapandi',username:'ssubashs',twitter:'sstweets'},
        contact:{email:'ss@sam.com',mobile:'3232123241',home:'9834723242',address:{line1:'6100 Desoto ave',line2:'Apt 980',city:'Woodland hills',state:'CA',country:'USA'}},
        notes:{},
        code:{}
        },							 
			
		function()
		{
			console.log('inserted ssubashs');
			
		}
		
		);
		/*
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
		*/
	});
});
