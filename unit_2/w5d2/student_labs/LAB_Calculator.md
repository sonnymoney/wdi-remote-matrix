![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-MATRIX

<hr>
Title: Express Calculator<br>
Type: Lab<br>
Duration: 1+ hrs<br>
Creator: Thom Page<br>
Topics: Routing and req.params<br>
<hr>

# CALCULATOR

Make a calculator that takes two params from the URI and returns the sum!

&#x1F535; **Setup**

In the `student_labs` directory for today:

* Make a directory `calculator`. `cd` into the directory.
* `npm init`
* Enter `server.js` as the entry point.
* `touch server.js` and open the project.
* `npm install --save express`
* `var express = require('express');`
* `var app = express();`
* `app.listen(3000);`


<hr>


### Instructions

Make a route in `server.js` that responds to the URI `calc`. Give the route two params, `:num1` and `:num2`.

Make it so that if the user enters:

`http://localhost:3000/calc/4/4` in the browser, the server send back a response of `8`.


NOTES

The params come in as strings, so to add them together as numbers they must be parseInt'ed

The sum will be a number, so must be coerced into a string when you send it back (if you try to res.send a number, Express will read it as an error code). The coercion could be as simple as: 

```
res.send("the sum is " + sum);
```

<br>
<hr>

# EXTRA: req.query

Let's expand our calculator so that we can get it to do more than just addition.

We _could_ make a route for each arithmetic expression (addition, multiplication, etc.) but there is another way using `req.query`.


```
app.get('/query', function(req, res) {
  console.log(req.query);
  res.send('query');
});
```

URL

```
http://localhost:3000/query?smell=bones&juice=greenjuice
```
