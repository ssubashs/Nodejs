/**
 * Evernote file
 */

var Evernote = require('evernote').Evernote;
var client = new Evernote.Client({
  consumerKey: 'ssubashs-9141',
  consumerSecret: '62d0cb52964b07b2',
  sandbox: true // Optional (default: true)
});
client.getRequestToken('http://localhost:3000/swiftapp_callback', function(error, oauthToken, oauthTokenSecret, results) {
  // store tokens in the session
  // and then redirect to client.getAuthorizeUrl(oauthToken)
	console.log(oauthToken);
	console.log(oauthTokenSecret);
	console.log(results);
});