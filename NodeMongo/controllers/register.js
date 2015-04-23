var userread = require("../model/userread");
var userwrite = require("../model/userwrite");
module.exports.controller = function(app) {

/**
 * a home page route
 */

  app.post('/register', function(req, res) {
		
		var newuser = { 
						"personal" : {
									"username":"",												
									"createdon": new Date(),
									 },
						"contact" : {
									"email" : "",
									}
					};	
		var useraccess = {"uid":"" ,"username":"","password":"","createdon":new Date()};		

		
	  var username = req.body.username;
	  var password = req.body.password1;
	  var email = req.body.email;
	  newuser.personal.username = username;
	  // newuser.personal.password = password;
	  newuser.contact.email = email;
	  useraccess.username = username;
	  useraccess.password = password;
	  
	  console.log('new user '+ newuser);
	  userwrite.insertUser(newuser,function(userrow)
			  {
			  	useraccess.uid = userrow._id;
				userwrite.insertUserAccess(useraccess,function(accessrow)
				{
					req.login(accessrow, function(err) {
					        if (err) {
					        	 res.render('login', {message: 'Registration failed !' });
					        	
					        } 
					        res.redirect('/admin/'+userrow._id+'#/setting/personal');
					 });

				});			  	
				
				
			  });
  });



};
