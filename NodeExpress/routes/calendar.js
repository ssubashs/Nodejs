
/*
 * GET users listing.
 */

exports.parseics = function(req, res){
	var response = '{"success":1,"result":[{"title":"[canceled] onGameStart 2015","type":"VEVENT","description":"http://lanyrd.com/cztxw","location":"Palac Prymasowski, ul. Senatorska 13/15, 00-075","id":"66b7114c620f20a15a9340d541f95f816ca37024","url":"http://lanyrd.com/2015/ogs14/","start":1426032000000,"end":1426291200000},{"title":"MelbJS","type":"VEVENT","description":"http://lanyrd.com/cchprh","location":"Aconex, Duckboard Place, Melbourne, 3000","id":"91d011bdbdd8909c5734280db9226d5b38da0301","url":"http://lanyrd.com/2015/melbjs-march/","start":null,"end":null},{"title":"KarlsruheJS","type":"VEVENT","description":"The JavaScript meetup in Karlsruhe.nnhttp://lanyrd.com/cckhmx","location":"ETECTURE Karlsruhe, Bachstraﬂe 43, Karlsruhe, Germany, 76185","id":"c533de8091e989bba46ed3d8f5be5522c19f3c90","url":"http://lanyrd.com/2015/karlsruhejs-march/","start":null,"end":null},{"title":"NodeConf ONE-SHOT Christchurch","type":"VEVENT","description":"ONE-SHOT is a one day single track speaker series presented by NodeConfnnhttp://lanyrd.com/cchqrd","location":"Rydges Latimer, 30 Latimer Square","id":"b1b6cc71e82bb3b50b3f3611b104277068a112b3","url":"http://lanyrd.com/2015/oneshotchch/","start":1427500800000,"end":1427673600000}]}';
	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	res.end(response);  
};