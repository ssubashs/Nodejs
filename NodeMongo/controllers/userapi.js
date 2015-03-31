/**
 * New node file
 */

var userread = require("../model/userread");
var userwrite = require("../model/userwrite");
var async = require('async');
module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/api/user/:id', function(req, res) {    
	  var _id = req.params.id;
	  userread.findUser(_id,function(details)
			  {
		  		 res.writeHead(200, {
					'Content-Type': 'application/json; charset=utf-8'
				});
				res.end(JSON.stringify(details));
				
			  });
  });
  
  
  app.post('/api/user/:id', function(req, res) {    
	  var _id = req.params.id;
	  var status = {};
	  var user = req.body;
	  console.log(user);
	  async.parallel([
	                  // update personal data
	                  function(callback) {
	                	  if(user.personal)
	                		  {
	                		  	userwrite.updatePersonal(_id,user.personal,function(error,data)
	                		  			{
	                		  				if(error)
	                		  					{
	                		  						callback(error);
	                		  					}	                		  					
	                		  				else
	                		  					{
	                		  						status.personal='success';
	                		  						callback();
	                		  					}	
	                		  			});
	                		  }
	                	  
	                  },
	                  // update contact data
	                  function(callback)
	                  {
	                	  if(user.contact)
	                		  {
	                		  	userwrite.updateContact(_id,user.contact,function(error,data)
	                		  			{
		            		  				if(error)
		            		  					{
		            		  						callback(error);
		            		  					}	                		  					
		            		  				else
		            		  					{
		            		  						status.contact='success';
		            		  						callback();
		            		  					}	
		            		  			});
	                		  }
	                  }
	                  ],function(err){
		  				if(err)
		  					{
			  					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
			  					res.end(JSON.stringify({status:'error'}));
		  					}
		  				res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
	  					res.end(JSON.stringify(status));
		  			
	  					});

  });
  
  
  app.get('/api/user/:id/personal',function(req, res) {     
	  var _id = req.params.id;
	  userread.getPersonalDetails(_id,function(details)
			  {
		  		 res.writeHead(200, {
					'Content-Type': 'application/json; charset=utf-8'
				});
				res.end(JSON.stringify(details));
			  });
  });
  
    app.get('/api/user/:id/contact',function(req, res) {     
	  var _id = req.params.id;
	  userread.getContactDetails(_id,function(details)
			  {
		  		 res.writeHead(200, {
					'Content-Type': 'application/json; charset=utf-8'
				});
				res.end(JSON.stringify(details));
			  });
  });
  
    app.get('/api/user/:id/notes',function(req, res) {     
	  var _id = req.params.id;
	  userread.getNoteDetails(_id,function(details)
			  {
		  		 res.writeHead(200, {
					'Content-Type': 'application/json; charset=utf-8'
				});
				res.end(JSON.stringify(details));
			  });
  });
  
	  app.get('/api/user/:id/code',function(req, res) {     
		  var _id = req.params.id;
		  userread.getCodeDetails(_id,function(details)
				  {
					 res.writeHead(200, {
						'Content-Type': 'application/json; charset=utf-8'
					});
					res.end(JSON.stringify(details));
				  });
	  });
  

  
  
};