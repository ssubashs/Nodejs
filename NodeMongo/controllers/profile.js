/**
 * New node file
 */
var userread = require("../model/userread");
var userwrite = require("../model/userwrite");
var ObjectID = require('mongodb').ObjectID;

module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/profile/:id', function(req, res) {
      var linkid = req.params.id;  
      if(!ObjectID.isValid(linkid))
      {
      	res.render('404profile',{error:"invalid user",description:"user is relevant to this system"});
      } 
      else   
      	  userread.getLinkDetails(linkid,function(err,rows)
			  {
			  	if(err)		  		
			  		res.render('500');

			  	else if(rows && rows.uid)		
		  			res.render('profile',{userid:rows.uid});
		  		else
		  			res.render('404profile');
		  		// update the linkaccess. 


			  });

      
  });


};