![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-MATRIX

<hr>
Title: Express - Create<br>
Type: Lesson<br>
Duration: 3.5 hrs <br>
Creator: Thom Page<br>
Topics: <br>
<hr>

# EXPRESS - CREATE

### Lesson Objectives
_After this lesson, students will be able to:_

- Make routes (New and Create) for creating data
- Write a form within a view in order to capture datum input
- Make a POST request to the server
- Use the body-parser middleware to accept incoming data through `req.body`
- Create data within the dummy data instance
- Redirect routes using `res.redirect` 

<br>
<hr>

## CRUD REVISION

CRUD is an acronym for the fundamental operations that we will perform on data:

* Create
* Read
* Update
* Destroy

We have already looked at **READ**

Today we will talk about **CREATE**


## RESFTUL ROUTES REVISION

* Index
* Show
* New
* Create
* Update
* Destroy

We have seen `Index` and `Show`, today we we will look at the `New` and `Create` routes, and how they relate to creating data.

First, let's look at `New`.

<br>
<hr>

## NEW route and view

We will want a way for our user to input data. In this case, a new book. For this we will want a webpage that has a form on it. We will need a route and a view to accomplish this step.

* Make a link to add a new book in index.ejs
* Link goes nowhere, so we have to make a route

MUST BE ABOVE SHOW ROUTE due to params

```
// NEW Route
app.get('/books/new', function(req, res) {
  res.render('books/new.ejs');
});
```

Make a `new.ejs` file within the views/books directory

```
<h1>New Book</h1>

<form>
  <input type="text" placeholder="Title"/>
  <input type="text" placeholder="Author"/>
  <button type="submit">Create Book</button>
</form>
```

The form does not go anywhere yet! We can tell the form which route to go to with `action`:

```
<form action="/books">
```

Still not where we want it to go. We want to send the form data to a route that will *add* data to our database instead (and not the index route). To do this, we will specify that we want our form to make a POST request instead of a GET request.

<br>
<hr>

## HTTP Verbs

* GET
* POST
* UPDATE
* DELETE

**GET** requests are the standard internet requests. With a GET request we are asking for data **from** the server. The server will give us webpages. It can also give us JSON.

**POST** requests are more esoteric. With a POST request we are asking to send data **to** the server. We are not asking for a webpage. We just want to send a **JSON object** to a route.

We can send data using a form, but we must do it with a **POST** request.


The overall process is as follows:

```
1. Set up a POST route to which we can send our data
2. Tell our form in our New view to send data to the POST route
3. Install and configure body-parser middleware so that the server can accept data inside req.body
4. Inside the POST route, access the data within req.body
5. Alter our database with the new data
6. Redirect our POST route to an already existing GET route that will serve up a webpage back to our user
```


## POST Request

`app.get` vs `app.post` routes, although they have the same URI `/books`, they are in fact _different_ routes.

```
// CREATE Route
app.post('/books', function(req, res) {
  // console.log(req.body);
  // res.redirect('/books');
});
```

In our New form, we want to tell the browser not to make a GET request to the existing `/books` route, but instead to make a POST request to the other `/books` route.

```
<form action="/books" method="POST">
```

Our server, under the hood, will turn our form data into an object. We will, in the end, just be pushing this object into our database. 

For the form to send an object, it needs a way to separate `keys` and `values`. The keys are the headings "title" and "author" that each entry in our database should have. The values are the input that the user provides. To send key-value pairs, we adjust our form to give our input values the associated keys with the `name` attribute:

```
<form action="/books" method="POST">
  <input type="text" name="title" placeholder="Title"/>
  <input type="text" name="author" placeholder="Author"/>
  <button type="submit">Create Book</button>
</form>
```

<br>
<hr>

## body-parser

If we want to submit data to our server from the browser, we need to enable the capability for our server to receive data in the `request object`.

`npm install --save body-parser`

`var bodyParser = require('body-parser');`

```
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
```

If we uncomment req.body and res.redirect, the page should redirect to where we asked it to go, and we should also see the data show up in Terminal as an object. We haven't yet added this data to our database.

<br>
<hr>

## Add data to database

```
app.post('/books', function(req, res) {
  console.log(req.body);
  books.push(req.body);
  res.redirect('/books');
});
```

### `req.body`
req.params is an object that takes variables from the url.

req.body is an object that comes from data submitted to the server.

### request object
The request object has all the info that a client sends to the server.

* body-parser enabled req.body. Try commenting out body-parser and see if req.body exists in the request object.
* try to send form data without body-parser


### `res.redirect`

With res.redirect we can redirect our browser. When a user hits the 'root' route, for example, we can direct them to our main resource:



### RESTFul routes and corresponding HTTP requests

So far we have seen

* Index (GET)
* Show (GET)
* New (GET)
* Create (POST)

There are three more:

* Edit (GET)
* Update (PUT)
* Delete (DELETE)


## Testing a POST route

You can test your post route (send data to it) without going through the hassle of first creating a view with a form.

We can use `cURL` to send data to our routes in the Terminal.

OPen a new Terminal tab: `command+T`

`curl -X POST -d title="Nausea" -d author="Jean-Paul Sartre" http://localhost:3000/books`

<br>
<hr>
License
</hr>

