/**
 * New node file
 */
var mongoconfig = require('../model/mongoconfig');

var findByUsername = function findByUsername(username, callback) {
  var userdb = mongoconfig.db.get('user');
		userdb.findOne({'personal.username':username},function(error,user){
		 if(error)
			 {
			// nodata	 			
			  return callback(null,null);			
			 }
		// success
		 console.log('retreived user' + user);
		 return callback(null,user);
		 //console.log(users);
	 });
 }; 
 
 var findById = function findById(id, callback) {
  var userdb = mongoconfig.db.get('user');
		userdb.findOne({_id:id},function(error,user){
		 if(error)
			 {
			// nodata	 			
			  return callback(null,null);			
			 }
		// success
		 console.log('retreived user' + user);
		 return callback(null,user);
		 //console.log(users);
	 });
 };  
 
var findUser = function(id,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.findOne({_id:id},function(error,user){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success
		 console.log('retreived user' + user);
		 return callback(user);
		 //console.log(users);
	 });
};


var getPersonalDetails = function(id,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.findOne({_id:id},'personal',function(error,personaldetail){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success
		 console.log('retreived user detail' + personaldetail);
		 return callback(personaldetail);
		 //console.log(users);
	 });
};

var getContactDetails = function(id,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.findOne({_id:id},'contact',function(error,contactdetail){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success
		 console.log('retreived user detail' + contactdetail);
		 return callback(contactdetail);
		 //console.log(users);
	 });
};


var getNoteDetails = function(id,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.findOne({_id:id},'notes',function(error,notedetails){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success
		 console.log('retreived user detail' + notedetails);
		 return callback(notedetails);
		 //console.log(users);
	 });
};

var getCodeDetails = function(id,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.findOne({_id:id},'code',function(error,codedetail){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success		
		 return callback(codedetail);
		 //console.log(users);
	 });
};


module.exports.findByUsername = findByUsername; 
module.exports.findById = findById; 
module.exports.findUser = findUser; 
module.exports.getPersonalDetails = getPersonalDetails;
module.exports.getContactDetails = getContactDetails;
module.exports.getNoteDetails = getNoteDetails;
module.exports.getCodeDetails = getCodeDetails;
