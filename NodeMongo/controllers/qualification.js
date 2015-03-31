/**
 * New node file
 */




module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/api/education/:id', function(req, res) {    
	  var _id = req.params.id;	  
	  var edu = {_id:_id,education:[{'eid':'1','school':'Vivekananda vidyalaya','degree':'10  grade','startdate':'','enddate':'','field':'General','grade':'90%','descrition':''},
	  {'eid':'2','school':'Dav Matriculation','degree':'12  grade','startdate':'','enddate':'','field':'Science major','grade':'95%','descrition':''}]};
					res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify(edu
						));
	
  });
    
    app.put('/api/education', function(req, res) {
	  var edu = req.body;
	  console.log(edu);    	 
    		        		  						
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});		  			  		 
		res.end(JSON.stringify({status:'success'}));

  });
  
  
  
};