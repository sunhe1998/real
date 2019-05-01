var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();

var api = new ParseServer({
	databaseURI:'mongodb+srv://sunhe:89893856@sunhe-y8qby.mongodb.net/test?retryWrites=true',
	appId: 'sunhe',
	masterKey: 'yum',
	fileKey: 'yummy',
	serverURL: "http://localhost:1337/parse"
});

//Server the parse API on the / patse URI prefix
app.use('/parse', api);

var port = process.env.PORT || 1337;
app.listen(port, function(){
	console.log('parse-server running on port' + port + '.');

});