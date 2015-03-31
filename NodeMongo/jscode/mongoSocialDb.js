/**
 * New node file
 */
var socialdb = require("../model/socialdb");

var id = '54ed1ff1c5c25fc8041648ff';
var appname = "git";
var gitdata = {
	"firstname" : "Subash",
	"lastname" : "Soundrapandi",
	"username" : "ssubashs",
	"Orgname" : "changedsubash"
};
/*
socialdb.updateAppSetting(id,appname,gitdata,function(error,details)
			  {
			  if(error)
				console.log(error);
			  else	
		  		 console.log(details);				
			  });
*/
 socialdb.findappsetings(id,appname,function(error,details)
			  {
		  		 console.log(details.social);
				
			  });