/**
 * New node file
 */
var http = require('http'),
fs = require('fs');
console.log('Starting .. .');
var config = JSON.parse(fs.readFileSync("../data/config.json"));
var host = config.host;
var port = config.port;
//var host = "127.0.0.1";
//var port = "3000";
var server= http.createServer(function(req,res)
		{
			console.log("Incoming request for "+ req.url);
			fs.readFile("./../public/"+req.url, function(err, data) {
				if(err)
					{
						console.log(err.message);
						res.writeHead(404,{"Content-type":"text/plain"});
						res.end("File not found..");	
					}
				else
					{
						res.writeHead(200,{"Content-type":"text/html"});
						res.end(data);	
					}
			});
			
		});

server.listen(port,host,function(){
	console.log("Listening to port ",port);	
});

fs.watchFile("../data/config.json",function(){
	var updatedConfig = JSON.parse(fs.readFileSync("../data/config.json"));
	
	console.log('server ->',updatedConfig.host+":"+updatedConfig.port);
	server.close();
	server.listen(updatedConfig.port,updatedConfig.host,function(){
		console.log("Restarting the app to port ",updatedConfig.port);	
	});
});
	

