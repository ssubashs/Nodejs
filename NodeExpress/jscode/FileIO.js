/**
 * New node file
 */
fs=require('fs');
fs.readFile('../data/person.json','utf8', function(err, data) {
	console.log('Attempting to read file :: person.json');
	if(err)
	{
	 return console.log(err);
	}
	console.log(data);
});

fs.readFile('../data/config.json','utf8', function(err, data) {
	console.log('Attempting to read file :: config.json');
	if(err)
	{
	 return console.log(err);
	}
	console.log(data);
});

console.log('Starting module file IO  ....');