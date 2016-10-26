![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-MATRIX

<hr>
Title: Routing and Params<br>
Type: Lesson<br>
Duration: 1.5 hrs <br>
Creator: Thom Page<br>
Topics: Routing and params in Express<br>
<hr>

# ROUTING AND PARAMS

### Lesson Objectives
_After this lesson, students will be able to:_

- Create dynamic routes using params


<br>
<hr> 

&#x1F535; **Setup (12 min)**

Initialize a server as before!

* Make a directory `params`. `cd` into the directory.
* `npm init`
* Enter `server.js` as the entry point.
* `touch server.js` and open project.
* `npm install --save express`
* `var express = require('express');`
* `var app = express();`
* `app.listen(3000);`

&#x1F535; **Activity (5 min)**

* Write a route for the root that sends back 'Root route!'

```
app.get('/', function(req, res) {
	res.send('Root route!');
}
```

&#x1F535; **Activity (5 min)**

* Write a route that responds to the url `/hello` and sends back ('Hello route!')

3:23


## DYNAMIC ROUTING

Our route is a fixed path to some resource (an html page, for example). We can augment or support that path by providing parameters. 

In a sense, we can write a route that acts like a function with a parameter, and we can supply the arguments for that 'function' in the URL.

Why would we want to do this?


&#x1F535; **Demonstrate (5 min)**

Beans, Bones, Bins app.

Each resource has a different number associated with it in the URL (the number after `products`).

![](https://i.imgur.com/thYZmLj.png)

![](https://i.imgur.com/MbVSugh.png)

![](https://i.imgur.com/AfxqGPk.png)

Imagine an app with thousands of products: There would not be thousands of distinct routes for each product! With params, we can write a _single_ route to handle all of the resources. This keeps our code DRY and flexible.

3:28

## PARAMS

We can specify a dynamic segment in our server routes with the colon `:` and an arbitrary variable name. `:something`

&#x1F535; **Write in (5 min)**

```
app.get('/hello/:firstname', function(req, res) {
  res.send('hello name!');
});
```
3:33

We are not yet accessing the params. To do this, we use `req.params`. When we console.log `req.params`, we get an object with a key (the param name), and a value (what we entered into the URL).

&#x1F535; **Write in (5 min)**

```
app.get('/hello/:firstname', function(req, res) {
  console.log(req.params);
  res.send('hello name!');
});
```
req.params in Terminal:

![](https://i.imgur.com/GFt5s7F.png)

3:38

We can access the value of `name` directly with `req.params.name`. Let's send _the name we entered_ back to our user:

&#x1F535; **Write in (5 min)**

```
app.get('/hello/:name', function(req, res) {
  console.log(req.params);
  res.send('hello ' + req.params.firstname);
});
```

3:43

# Order matters

Order matters with params routes in relation to other routes in which the URI is specified in the same position. The `:firstname` route will run if the route is not jack:

```
app.get('/hello/jack', function(req, res) {
  res.send('JACK IS BACK!!!!!');
});

app.get('/hello/:firstname', function(req, res) {
  console.log(req.params);
  res.send('hello ' + req.params.firstname);
});
```

Here, the jack route will never run:

```
app.get('/hello/:firstname', function(req, res) {
  console.log(req.params);
  res.send('hello ' + req.params.firstname);
});

app.get('/hello/jack', function(req, res) {
  res.send('JACK IS BACK!!!!!');
});
```

3:55

# Multiple Params

We can store multiple params in the `req.params` object:

&#x1F535; **Write in (5 min)**

```
app.get('/hello/:firstname/:lastname', function(req, res) {
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});
```

4:00


# The Request object

In the `hello/:firstname/:lastname` route, write in:

```
console.log(req)
```

This will allow you to see the entire request object. This object contains all of the information that the browser sends to the server. There's a ton of information in there!


&#x1F535; **Activity (5 min)**

* In the browser, go to the firstname/lastname route
* Have a look through the entire request object in Terminal
* Find the `req.params` object within it.

`req.params` is an object nested within the `req` object.




<br>
<hr>
License
<hr>









