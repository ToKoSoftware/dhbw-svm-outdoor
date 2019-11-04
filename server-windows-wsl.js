var express = require('express');
var app = express();
app.use(express.static('dist'));
app.listen();
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || 'localhost';
app.listen(server_port, server_host, function () {
    console.log('Listening on port %d', server_port);
});
