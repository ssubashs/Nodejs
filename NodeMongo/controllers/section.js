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
	res.render('template/codesection',{'userid':_id});	
  });
  
  app.get('/profile/:id/section/contact', function(req, res) {     
	var _id = req.params.id;	 
	res.render('template/contactsection',{'userid':_id});
	
  });
  
  app.get('/profile/:id/section/notes', function(req, res) {
	var _id = req.params.id;
	res.render('template/notesection',{'userid':_id});
	
  });
  
  app.get('/profile/:id/section/skill', function(req, res) {
	var _id = req.params.id;
	res.render('template/skillsection',{'userid':_id});
		  		
  });

  app.get('/profile/:id/section/home', function(req, res) {
	var _id = req.params.id;
	res.render('template/profilesection',{'userid':_id});
	  
  });


};