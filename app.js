var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});


app.get('/', function (request, response) {
  response.render('base.html');
});

app.get('/cats', function (request, response) {
  response.send('Cats');
});

app.get('/cats_and_dogs', function (request, response) {
  response.send('Cats and dogs');
});

app.get('/dogs', function (request, response) {
  response.send('Dogs');
});

app.get('/greet/slug:', function (request, response, next ) {
  var slug = request.params.slug;
  response.send(`Hello ${slug}!`);
});

app.get('/year/slug:', function (request, response) {
  var age = request.query.age;
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  var birthYear = year - age;
  response.send(`You were born in ${birthYear}`);
});

app.get('/favAnimals', function(request, response) {
  var animals =[ { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];
  response.render('favAnimals.html', animals);
  console.log(animals[0].name);
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
