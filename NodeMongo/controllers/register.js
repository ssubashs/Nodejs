var userread = require("../model/userread");
var userwrite = require("../model/userwrite");
module.exports.controller = function(app) {

/**
 * a home page route
 */

  app.post('/register', function(req, res) {
		
		var newuser = { "createdon": new Date(),
						"personal" : {			
									"username" : "",
									"password" : ""
									 },
						"contact" : {
									"email" : "",
									}
					};	
		
	  var username = req.body.username;
	  var password = req.body.password1;
	  var email = req.body.email;
	  newuser.personal.username = username;
	  newuser.personal.password = password;
	  newuser.contact.email = email;
	  
	  console.log('new user '+ newuser);
	  userwrite.insertUser(newuser,function(row)
			  {
				req.login(row, function(err) {
				        if (err) {
				        	 res.render('login', {message: 'Registration failed !' });
				        	
				        } 
				        res.redirect('/admin/'+row._id+'#/setting/personal');
				 });
				
			  });
  });



};
