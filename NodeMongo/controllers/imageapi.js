
var imagedb = require("../model/image");
var ObjectID = require('mongodb').ObjectID;
var fs = require("fs");

module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.post('/api/image/upload/:id', function(req, res) {    
	  var filemetadata = req.files;
	  var userid = req.params.id;
	  console.log('files in upload :: ');
	  console.log(filemetadata);
	  var tmp_path = null;
	  if(filemetadata && filemetadata.image)
		  {
		   tmp_path= filemetadata.image.path;
		   console.log('req.files is not empty');
		   console.log(JSON.stringify(filemetadata));
			  var data = fs.readFileSync(tmp_path);			
					/*
					if(err)
					{
						res.writeHead(500, {
							'Content-Type': 'application/json; charset=utf-8'
						});
						res.end(JSON.stringify({status:'error',description:'local file read/write error'}));
					 
					}
					*/
					// write req.files and data to mongodb.
					var base64data = new Buffer(data).toString('base64');
					 var metadata = {file:{originalname:'',type:'',size:0,localserverpath:''},data:''};
					  metadata.file.originalname = filemetadata.image.name;
					  metadata.file.type = filemetadata.image.type;
					  metadata.file.size = filemetadata.image.size;
					  metadata.file.localserverpath = filemetadata.image.path;
					  metadata.uid=userid;
					  metadata.data = base64data;
					imagedb.saveImage(metadata,function(id){
					console.log('Image saved with id ' +id);
					 res.writeHead(200, {
							'Content-Type': 'application/json; charset=utf-8'
						});
						res.end(JSON.stringify({status:'success',imageid:id}));
					});
				
			  fs.unlink(tmp_path, function() {            
		          console.log('image temp file deleted');
		        });
		  }
	  else
		  {
			  console.log('req.files is empty ');
//			  filemetadata = req.body;
//			  console.log(filemetadata);
//			  console.log(filemetadata.image);
//			  tmp_path = filemetadata.image.path;
			  res.writeHead(500, {
					'Content-Type': 'application/json; charset=utf-8'
				});
				res.end(JSON.stringify({status:'failed',message:'Failed to parse the request for file upload :: file should be named image'}));
			  
		  }
	  
	 
	
  });
  
  app.get('/api/image/:id',function(req,res){
	    var imageid = req.params.id;
		if(ObjectID.isValid(imageid))
		{
				imagedb.getImage(imageid,function(imagerow){
					if(imagerow)
					{
						res.writeHead(200, {'Content-Type': imagerow.file.type});
						res.end(imagerow.data, 'binary');
					}
					else
						{
						res.writeHead(404);
						res.end(JSON.stringify({error:"Cound not find the image"}));
						}
				});			
		}
		else{
				res.writeHead(404);
				res.end(JSON.stringify({error:"Invalid ID"}));
		}
		
  });
  
 
  
};
