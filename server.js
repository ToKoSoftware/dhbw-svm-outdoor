var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 4000));
app.use(express.static('dist'));
app.listen();
