/**
 * New node file
 */
var userread = require("../model/userread");
var userwrite = require("../model/userwrite");
var id = '54ed1ff1c5c25fc8041648ff';
var persondata = {
	"firstname" : "Subash",
	"lastname" : "Soundrapandi",
	"username" : "ssubashs",
	"twitter" : "tweetme"
};

var user = {		
		"personal" : {			
			"username" : "testuser",
			"password" : "test123"
		},
		"contact" : {
			"email" : "ss@sam.com",
			
		},
		"notes" : {
			
		},
		"code" : {
			
		}
	};
/*
userread.findById(id,function(somedata,userdetails)
		{
			console.log(userdetails);			
		});
		
userread.findByUsername('ssubashs',function(somedata,userdetails)
		{
			console.log(userdetails);			
		});
		

userread.findUser(id,function(userdetails)
		{
			console.log(userdetails);			
		});

userread.getPersonalDetails(id,function(personaldetails)
		{
			console.log(personaldetails);			
		});


userwrite.updatePersonal(id,persondata,function(rows)
		{
		console.log('rows updated '+rows);
		});
*/

userwrite.insertUser(user,function(rows){
	console.log(rows._id);
});