/**
 * New node file
 */

var flow = require('nimble');
var fs=require('fs');

fs.readFile('../data/person.json','utf8', function(err, data) {
	console.log('Attempting to read file :: person.json');
	if(err)
	{
	 return console.log(err);
	}
	data = JSON.parse(data);
	console.log(data.roles);
	var roles = flow.map(data.roles, function(val) {
		return "role:: "+val;
	});
	console.log(roles);
});