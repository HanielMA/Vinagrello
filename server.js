const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
var port = process.env.PORT || 5000; 				// set the port

// serve static contents
app.use(express.static(__dirname + '/dist'));

// proxy api request
/*app.all("/api/*", (req, res) => {
  apiProxy.web(req, res, {
    target: 'http://localhost:8080' || process.env.BACK_URL
  });
});*/

// fallback to index.html for SPA.
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);

console.log("App listening on port: " + port);