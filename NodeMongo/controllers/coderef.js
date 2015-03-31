/**
 * New node file
 */

var coderef = require("../model/coderefdb");


module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/api/code/:id', function(req, res) {    
	  var _id = req.params.id;	  
	  coderef.getRepos(_id,function(error,repos)
			  {
				if(error)
				{
					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'api error - '+error}));
				}
				else if(repos)
				{	
					res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify(repos));
				}
				else 
				{
					res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'Document not found'}));
				}
				
			  });
  });
  
  app.get('/api/code/:id/refresh', function(req, res) {    
	  var _id = req.params.id;	  
	  coderef.updateRepos(_id,null,function(error,repos)
			  {
				if(error)
				{
					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'api error - '+error}));
				}
				else if(repos)
				{	
					res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify(repos));
				}
				else 
				{
					res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'Document not found'}));
				}
				
			  });
  });
  
  
  app.get('/api/notes/:id', function(req, res) {    
	  var _id = req.params.id;	  
	  coderef.getNotes(_id,function(error,notes)
			  {
			  if(error)
				{
					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'api error - '+error}));
				}
				else if(notes)
				{	
					res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify(notes));
				}
				else
				{
					res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify({status:'Document not found'}));
				}
				
			  });
  });
  
  app.post('/api/notes/:id', function(req, res) {    
	  var _id = req.params.id;	
	  var notes = req.body;
	  console.log(notes);
    	  if(notes)
    		  {
    		  coderef.saveNote(notes,_id,function(error,data)
    		  			{
    		  				if(error)
    		  					{
    		  					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
			  					res.end(JSON.stringify({status:'api error - '+error}));
    		  					}	                		  					
    		  				else
    		  					{	                		  						
    		  						res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
    			  					res.end(JSON.stringify({status:'success :: '+data}));
    		  					}	
    		  			});
    		  }
  });
  
  app.put('/api/notes', function(req, res) {
	  var notes = req.body;
	  console.log(notes);    	 
    		  coderef.updateNote(notes,function(error,data)
    		  			{
    		  				if(error)
    		  					{
    		  					res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
			  					res.end(JSON.stringify({status:'api error - '+error}));
    		  					}	                		  					
    		  				else
    		  					{	                		  						
    		  						res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
    			  					res.end(JSON.stringify({status:'success :: '+data}));
    		  					}	
    		  			});
    	
  });
  
  
  
};