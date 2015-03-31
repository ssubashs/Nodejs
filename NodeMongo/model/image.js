/**
 * New node file
 */
var mongoconfig = require('../model/mongoconfig');
var imagedb = mongoconfig.db.get('image');
var saveImage = function(imagedata,callback)
{
	
		imagedb.insert(imagedata,function(error,rows){
		 if(error)
			 {
			// nodata	 
			 console.log(error);
			  return callback(false);
			
			 }
		// success
		 console.log('inserted image ' + rows._id);		 
		 return callback(rows._id);
		 //console.log(users);
	 });
};

var getImage = function(id,callback)
{
	imagedb.findOne({_id:id},function(error,image){
		if(error)
		 {
		// nodata	 
		 console.log(error);
		  return callback(false);
		
		 }
		// success
		if(image && image.data)
		{
		 var decodedImage = new Buffer(image.data, 'base64').toString('binary');
		 image.data = decodedImage;
		 //console.log(image);
		 return callback(image);
		 }
		 else
		 {	
			return callback(false);
		 }
		 
	
	});


}




module.exports.saveImage = saveImage;
module.exports.getImage = getImage;
