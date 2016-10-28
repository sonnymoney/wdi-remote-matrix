var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'));


app.listen(port, function() {
  console.log('App running on port ', port);
});

app.get('/', function(req, res) {
  res.send('Hello world');
});

var books = require('./books.js');

// INDEX Route
app.get('/books', function(req, res) {
  res.render('books/index.ejs', { books: books });
});

// SHOW Route
app.get('/books/:id', function(req, res) {
  res.render('books/show.ejs', { book: books[req.params.id] });
});
