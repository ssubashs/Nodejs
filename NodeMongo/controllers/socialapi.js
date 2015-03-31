/**
 * New node file
 */

var socialdb = require("../model/socialdb");
var async = require('async');
module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/api/social/:id/:app', function(req, res) {    
	  var _id = req.params.id;
	  var _app = req.params.app;
	  socialdb.findappsetings(_id,_app,function(error,details)
			  {
				if(error)
				{
					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'api error -try later'}));
				}
				else if(details)
				{	
					res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify(details.social));
				}
				else 
				{
					res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'Document not found'}));
				}
				
			  });
  });
  
  
  app.get('/api/social/:id', function(req, res) {    
	  var _id = req.params.id;
	  
	  socialdb.findappsetings(_id,null,function(error,details)
			  {
			  if(error)
				{
					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'api error -try later'}));
				}
				else if(details)
				{	
					res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify(details));
				}
				else
				{
					res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'Document not found'}));
				}
				
			  });
  });
  
  app.post('/api/social/:id/:app', function(req, res) {    
	  var _id = req.params.id;
	  var _app = req.params.app;
	  var status = {};
	  var appsetting = req.body;
	  console.log(appsetting);
    	  if(appsetting)
    		  {
    		  socialdb.updateAppSetting(_id,_app,appsetting,function(error,data)
    		  			{
    		  				if(error)
    		  					{
    		  					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
			  					res.end(JSON.stringify({status:'error'}));
    		  					}	                		  					
    		  				else
    		  					{	                		  						
    		  						res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
    			  					res.end(JSON.stringify({status:'success'}));
    		  					}	
    		  			});
    		  }
  });
  
  
  
  
};