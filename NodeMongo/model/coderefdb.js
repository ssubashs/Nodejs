/**
 * New node file
 */

var https = require('https');
var mongoconfig = require('../model/mongoconfig');
var socialdb = require('../model/socialdb');
var userwrite = require('../model/userwrite');
var notes = mongoconfig.db.get('notes');
var userdb = mongoconfig.db.get('user');

function getGitRemoteRepos(username,callback)
{
	var options = {
			host:'api.github.com',
			path:'/users/'+username+"/repos",
			method:'GET',
			headers: {'user-agent': 'Mozilla/5.0','Accept':'application/vnd.github.moondragon+json'}		
	};

	var request = https.request(options,function(response,error)
			{
				var body = '';
				if(error){
						console.log('error .. ' + error);
						callback(null,error);
					}
				response.on("data",function(chunk){
						body+=chunk.toString('utf8');
					});
				response.on("end",function(){
					var json = JSON.parse(body);
					var repos = [];
					console.log(json);
					console.log("user "+username + " has "+ json.length +" repo");
					json.forEach(function(repo) {
						
						repos.push({
							name:repo.name,
							description:repo.description,
							repourl:repo.html_url,
							readme:repo.html_url+'/blob/master/README.md',
							created:repo.created_at,
							lastupdate:repo.updated_at
							});
					});			
					callback(repos,null);
				});
				
				response.on("error",function(error){
					console.log('error :: ',error);
				});
			});

	request.end();

};

var getRepos = function (id,callback) {

		userdb.findOne({_id:id},'repos',function(error,repos){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(error,repos);
			
			 }
		// success
		 console.log('retreived user detail' + repos);
		 return callback(error,repos);
		 //console.log(users);
	 });
 }; 
 
var updateRepos = function(id,gitid,callback)
{
	if(gitid == null)
	{	
		console.log('git id is null');
		socialdb.findappsetings(id,"git",function(error,user)
		{
			if(error)
				callback(error,null); // callback will handle
			else{
			console.log(user);
				if(typeof user.social.git.username != "undefined")
				{
					gitid = user.social.git.username;
					console.log('git id for the user is '+gitid);
					getGitRemoteRepos(gitid,function(repos,error){
						// let the callback handle error.
						callback(error,repos);
						// update the repos in userdb.
						updateUserwithRepos(id,repos,function(error,rows){
							if(error)
								console.log('failed to update the userdb with gitrepos');
							else	
								console.log('successfully updated userdb with gitrepos : '+rows);
						});
					});
				}	
			}
			
		});
				
	}
	else
	{
		getGitRemoteRepos(gitid,function(repos,error){
				// let the callback handle error.
				callback(repos,error);
				// update the repos in userdb.
				updateUserwithRepos(id,repos,function(error,rows){
					if(error)
						console.log('failed to update the userdb with gitrepos');
					else	
						console.log('successfully updated userdb with gitrepos : '+rows);
				});
			});
	}
	
}; 

var updateUserwithRepos = function (id,repos,callback)
{		
		userdb.update({_id:id},{$set:{repos:repos}},function(error,rows){
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


var getNotes = function (userid,callback) {  
userdb.findOne({_id:userid},'notesid',function(error,usernotes){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback('notesid not found', null);
			
			 }
		// success
		 console.log(usernotes);
		 var notesid = usernotes.notesid;
		 console.log(notesid);
		 getNoteByID(notesid,callback);		
		 
	 });

		
 };

var getNoteByID = function (id,callback) {
		notes.findOne({_id:id},function(error,note){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(error,note);
			
			 }
		// success
		 console.log('retreived user detail' + note);
		 return callback(error,note);
		 //console.log(users);
	 });
 };  
 
var updateNote = function(data,callback){		
	var id = data._id;
	  if(id)
	  {
				notes.update({_id:id},data,function(error,rows){
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
	 }
	 else
	 {
		callback('data is not complete',null);
	 }
};

var saveNote = function(note,id,callback){

		notes.insert(note,function(error,rows){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback('notes save failed',null);
			
			 }
		// success
		 console.log('inserted note ' + rows._id);	
		 userwrite.updateNotesID(id,rows._id,callback);
		 //return callback(rows._id);
		 //console.log(users);
	 });
};

module.exports.getRemoteRepos = getGitRemoteRepos;
module.exports.getRepos = getRepos;
module.exports.updateRepos = updateRepos;
module.exports.updateUserwithRepos = updateUserwithRepos;
module.exports.saveNote = saveNote;
module.exports.getNoteByID = getNoteByID;
module.exports.getNotes = getNotes;
module.exports.updateNote = updateNote;