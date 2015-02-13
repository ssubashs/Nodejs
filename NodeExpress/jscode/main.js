/**
 * New node file
 */
var mymodule = require('./mymodule.js');
var git = require('./github.js');

git.getRepos('ssubashs',function(repos)
		{
			console.log(repos);
		});

git.getRepos('arkalpa',function(repos)
		{
			console.log(repos);
		});

//console.log(mymodule.hello());