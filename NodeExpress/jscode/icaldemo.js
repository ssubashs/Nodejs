var ical = require('ical');
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

ical.fromURL('http://webmail.taf1.farmersagent.com/icalphp/vfreebusy.php?userid=icmsyy03@trg1.farmersagent.com', {}, function(err, data){
	console.log('received data from webmail ');
	console.log(data);
	if(err)
		{
		console.log('error in getting ical :: '+err);
		}
	if(data)
	{	
	  for (var k in data){
	    if (data.hasOwnProperty(k)){
	      var ev = data[k];
	      console.log("Conference", ev.summary, 'is in',  ev.location, 'on the', ev.start.getDate(), 'of', months[ev.start.getMonth()] );
	    }
	  }
	} 
	});