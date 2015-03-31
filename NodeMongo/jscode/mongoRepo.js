/**
 * New node file
 */
var coderefdb = require("../model/coderefdb");

var id = '54ed1ff1c5c25fc8041648ff';
var note_id = '5507787da15e1d540f421552';
var notes = {notes:[{'title':'Custom directives','tags':['javascripts','angularjs'],'description':'Directives which will bind hidden parameter to a angular model','url':'https://github/repos/ssubashs/test'},
			 {'title':'Spring data rest','tags':['springdata','rest','java'],'description':'Spring data rest','url':'https://github/repos/ssubashs/test'}]};

/*
coderefdb.updateRepos(id,null,function(error,repos)
			  {
				if(repos)
					console.log(repos);
				if(error)
					console.log(error);				
				
			  });


coderefdb.getRepos(id,function(error,repos)
		  {
			if(repos)
				console.log(repos);
			if(error)
				console.log(error);				
			
		  });
*/
/*
coderefdb.saveNote(notes,function(error,repos)
		  {
			if(repos)
				console.log(repos);
			if(error)
				console.log(error);				
			
		  });

*/
/*
coderefdb.getNoteByID(note_id,function(error,notes)
		  {
			if(notes)
				console.log(notes);
			if(error)
				console.log(error);				
			
		  });
*/

coderefdb.getNotes(id,function(error,notes)
		  {
			if(notes)
				console.log(notes);
			if(error)
				console.log(error);				
			
		  });