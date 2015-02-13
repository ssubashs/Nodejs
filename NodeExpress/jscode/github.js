/**
 * New node file
 */

var https = require('https');

function getGitRepos(username,callback)
{
//var username = 'ssubashs';
var options = {
		host:'api.github.com',
		path:'/users/'+username+"/repos",
		method:'GET',
		headers: {'user-agent': 'Mozilla/5.0'}
};

var request = https.request(options,function(response)
		{
			var body = '';
			response.on("data",function(chunk)
			{
				body+=chunk.toString('utf8');
			});
			response.on("end",function(){
				var json = JSON.parse(body);
				var repos = [];
				console.log("user "+username + " has "+ json.length +" repo");
				json.forEach(function(repo) {
					
					repos.push({
						name:repo.name,
						description:repo.description
						});
				});
				
				//console.log("Git hub repos :: " );
				//console.log(repos);
				callback(repos);
			});
			
			response.on("error",function(error){
				console.log('error :: ',error);
			});
		});

request.end();

}

/*
getGitRepos('ssubashs', function(repos) {
	console.log('ssubashs has '+repos.length +' repos');
	console.log(repos);
});
*/

module.exports.getRepos = getGitRepos;