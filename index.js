var express = require('express');
var app = express();
var pug = require('pug');
var homepage = require('./homepage');
var developersLanding = require('./developers-landing');
var developersDetail = require('./developers-detail');

app.set('views','.');
app.set('view engine','pug');

app.get('/', homepage.controller);
app.get('/developers', developersLanding.controller);
app.get('/developers/:developerId', developersDetail.controller);

app.listen(3000, function(){
  console.log('Web lista en puerto 3000.');
  console.log('Abre un browser y escribe http://localhost:3000');
});
