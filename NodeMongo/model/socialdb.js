/**
 * New node file
 */
var mongoconfig = require('../model/mongoconfig');

var findappsetings = function (id,appname, callback) {
  var userdb = mongoconfig.db.get('user');
		userdb.findOne({_id:id},'social.'+appname,function(error,user){
		 if(error)
			 {
			// nodata	 			
			  return callback(null,null);			
			 }
		// success
		 console.log('retreived data');
		 console.log(user);
		 return callback(null,user);
		 //console.log(users);
	 });
 }; 
 
 
 
 var updateAppSetting = function(id,appname,data,callback)
{
	var userdb = mongoconfig.db.get('user');
	var socialappsegment = 'social.'+appname;
	var socialappdata = {};
	socialappdata[socialappsegment] = data;
		userdb.update({_id:id},{$set:socialappdata},function(error,rows){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(error,null);
			
			 }
		// success
		 console.log('updated userrows ' + rows);
		 return callback(null,rows);
		 //console.log(users);
	 });
};
 
module.exports.findappsetings = findappsetings;
module.exports.updateAppSetting = updateAppSetting;
