// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// PORT
var port = 3000;

// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// LISTENER
app.listen(port, function() {
  console.log('App running on port ', port);
});

// DB
var books = require('./books.js');

// Root Route
app.get('/', function(req, res) {
  res.redirect('/books');
});

// INDEX Route
app.get('/books', function(req, res) {
  res.render('books/index.ejs', { books: books });
});

// NEW Route
app.get('/books/new', function(req, res) {
  res.render('books/new.ejs');
});

// SHOW Route
app.get('/books/:id', function(req, res) {
  res.render('books/show.ejs', { book: books[req.params.id] });
});

// CREATE Route, redirects to SHOW page
app.post('/books', function(req, res) {
  console.log(req.body);
  books.push(req.body);
  console.log(books);
  res.redirect('/books/' + (books.length - 1));
});
