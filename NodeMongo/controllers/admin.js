/**
 * New node file
 */

var userread = require("../model/userread");
var userwrite = require("../model/userwrite");
module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/admin/:id',ensureAuthenticated, function(req, res) {    
	  var _id = req.params.id;
//	  userread.getPersonalDetails(_id,function(details)
//			  {
		  		res.render('template/accountadmin',{'title':'Manage Account','id':_id});
//			  });
  });
  
  app.get('/admin/:id/overview',ensureAuthenticated, function(req, res) {     
	  var _id = req.params.id;
//	  userread.getPersonalDetails(_id,function(details)
//			  {
		  		res.render('template/overview',{'id':_id});
//			  });
  });
  
  app.get('/admin/:id/coderef',ensureAuthenticated, function(req, res) {     
	  var _id = req.params.id;
//	  userread.getPersonalDetails(_id,function(details)
//			  {
		  		res.render('template/coderef',{'id':_id});
//			  });
  });
  
  app.get('/admin/:id/personal',ensureAuthenticated, function(req, res) {     
	  var _id = req.params.id;
//	  userread.getPersonalDetails(_id,function(details)
//			  {
		  		res.render('template/personalsetting',{'id':_id});
//			  });
  });
  
  app.get('/admin/:id/account',ensureAuthenticated, function(req, res) {
	  var _id = req.params.id;
//	  userread.getPersonalDetails(_id,function(details)
//			  {
		  	    res.render('template/accountsetting',{'id':_id});
//			  });
  });
  
  app.get('/admin/:id/social',ensureAuthenticated,function(req, res) {
	  var _id = req.params.id;
//	  userread.getPersonalDetails(_id,function(details)
//			  {
		  		res.render('template/socialsetting',{'id':_id});
//			  });
		  		
  });

  app.get('/admin/:id/education',ensureAuthenticated,function(req, res) {
    var _id = req.params.id;
//    userread.getPersonalDetails(_id,function(details)
//        {
          res.render('template/education',{'id':_id});
//        });
          
  });

  app.get('/admin/:id/experience',ensureAuthenticated,function(req, res) {
    var _id = req.params.id;
//    userread.getPersonalDetails(_id,function(details)
//        {
          res.render('template/experience',{'id':_id});
//        });
          
  });

   app.get('/admin/:id/skills',ensureAuthenticated,function(req, res) {
    var _id = req.params.id;
//    userread.getPersonalDetails(_id,function(details)
//        {
          res.render('template/skills',{'id':_id});
//        });
          
  });
};


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}