/**
 * New node file
 */

var userdb = require("../model/userread");
module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/profile/:id/section/code', function(req, res) {    
	  var _id = req.params.id;
	  userdb.getPersonalDetails(_id,function(details)
			  {
		  		res.render('template/codesection',{'code':details});
			  });
  });
  
  app.get('/profile/:id/section/contact', function(req, res) {     
	  var _id = req.params.id;
	  userdb.getPersonalDetails(_id,function(details)
			  {
		  		res.render('template/contactsection',{'contact':details});
			  });
  });
  
  app.get('/profile/:id/section/notes', function(req, res) {
	  var _id = req.params.id;
	  userdb.getPersonalDetails(_id,function(details)
			  {
		  	    res.render('template/notesection',{'notes':details});
			  });
  });
  
  app.get('/profile/:id/section/skill', function(req, res) {
	  var _id = req.params.id;
	  userdb.getPersonalDetails(_id,function(details)
			  {
		  		res.render('template/skillsection',{'skill':details});
			  });
		  		
  });

  app.get('/profile/:id/section/home', function(req, res) {
	  var _id = req.params.id;
	  userdb.getPersonalDetails(_id,function(details)
			  {
		  		console.log("profile details ");
		  		console.log(details);
		  		res.render('template/profilesection',{'profile':details});
			  });
      
  });


};