var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
// response.send('Hello World 3!');

	fs.readFileSync('./bitstarter/index.html', function (err, html) {
        	if (err) {
                	throw err;
        	}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
