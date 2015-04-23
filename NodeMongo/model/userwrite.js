/**
 * New node file
 */
var mongoconfig = require('../model/mongoconfig');

var updatePersonal = function(id,personaldata,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.update({_id:id},{$set:{personal:personaldata}},function(error,rows){
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

var updateEducationDetails = function(id,educationdata,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.update({_id:id},{$set:{education:educationdata}},function(error,rows){
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

var updateContact = function(id,contactdata,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.update({_id:id},{$set:{contact:contactdata}},function(error,rows){
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

var updateExperienceDetails = function(id,experiencedata,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.update({_id:id},{$set:{experience:experiencedata}},function(error,rows){
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


var insertUser = function(userdata,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.insert(userdata,function(error,rows){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success
		 console.log('inserted userrows ' + rows);
		 return callback(rows);
		 //console.log(users);
	 });
};

var insertUserAccess = function(userdata,callback)
{
	var useraccess = mongoconfig.db.get('useraccess');
		useraccess.insert(userdata,function(error,rows){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success
		 console.log('inserted userrows ' + rows);
		 return callback(rows);
		 //console.log(users);
	 });
};

var updateNotesID = function(id,notes_id,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.update({_id:id},{$set:{notesid:notes_id}},function(error,rows){
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

var updateSkillDetails = function(id,skilldata,callback)
{
	var userdb = mongoconfig.db.get('user');
		userdb.update({_id:id},{$set:{skills:skilldata}},function(error,rows){
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



module.exports.updatePersonal = updatePersonal;
module.exports.updateContact = updateContact;
module.exports.insertUser = insertUser;
module.exports.updateNotesID = updateNotesID;
module.exports.updateEducationDetails = updateEducationDetails;
module.exports.updateExperienceDetails = updateExperienceDetails;
module.exports.updateSkillDetails = updateSkillDetails;
module.exports.insertUserAccess = insertUserAccess;
