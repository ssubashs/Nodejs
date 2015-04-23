/**
 * New node file
 */

var userread = require("../model/userread");
var userwrite = require("../model/userwrite");


module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/api/education/:id', function(req, res) {    
	  var _id = req.params.id;	 
	   userread.getEducationDetails(_id,function(details)
			  {
		  		 res.writeHead(200, {
					'Content-Type': 'application/json; charset=utf-8'
				});
				res.end(JSON.stringify(details));
				
			  }); 
	  // var edu = {_id:_id,education:[{'eid':'1','school':'Vivekananda vidyalaya','degree':'10  grade','startdate':'','enddate':'','field':'General','grade':'90%','descrition':''},
	  // {'eid':'2','school':'Dav Matriculation','degree':'12  grade','startdate':'','enddate':'','field':'Science major','grade':'95%','descrition':''}]};
			// 		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
			// 		res.end(JSON.stringify(edu
			// 			));
	
  });

 
    
    app.put('/api/education/:id', function(req, res) {
	  var edu = req.body;
	   var _id = req.params.id;	 
	  console.log(edu.education);    	 
    		        	
      userwrite.updateEducationDetails(_id,edu.education,function(error,repos)
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
  
   app.get('/api/experience/:id', function(req, res) {    
	  var _id = req.params.id;	 	  
	  // var resp = {_id:_id,experience:[{'wid':'1','organization':'Cognizant','title':'Associate programmer','startdate':'','enddate':'','descrition':''},
	  // {'wid':'2','organization':'Neobytes','title':'Senior Software engineer','startdate':'','enddate':'','descrition':''}]};
			// 		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
			// 		res.end(JSON.stringify(resp
			// 			));

   userread.getExperienceDetails(_id,function(details)
			  {
		  		 res.writeHead(200, {
					'Content-Type': 'application/json; charset=utf-8'
				});
				res.end(JSON.stringify(details));
				
			  }); 
	
  });

   app.put('/api/experience/:id', function(req, res) {
   	 var exp = req.body;
	   var _id = req.params.id;	 
	  console.log(exp.experience);    	 
    		        	
      userwrite.updateExperienceDetails(_id,exp.experience,function(error,repos)
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

    app.put('/api/skills/:id', function(req, res) {    
	  var data = req.body;
	   var _id = req.params.id;	 
	  console.log(data.skills);    	 
    		        	
      userwrite.updateSkillDetails(_id,data.skills,function(error,repos)
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
  
};