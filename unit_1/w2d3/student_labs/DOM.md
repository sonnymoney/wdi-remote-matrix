# Lab - Fruits list

## Basic

1. Set up some basic HTML that contains a `<ul>`
1. Create a JS file that does the following:
1. Given the array of groceries ['bananas', 'apples', 'peaches', 'kiwis', 'pears']:
	- loop through the array and insert elements as `<li>` tags in the '<ul>'
1. Find the last fruit (pears) and change it to 'Jagged Metal Krusty-O'
1. Remove the 'Jagged Metal Krusty-O'

## Intermediate

Here is your data array:

```javascript
[
	{
		name:'banana',
		quantity: 5,
		isDangerous: false
	},
	{
		name:'apple',
		quantity: 10,
		isDangerous: false
	},
	{
		name:'Jagged Metal Krusty-O',
		quantity: 1,
		isDangerous: true
	},
	{
		name:'peach',
		quantity: 3,
		isDangerous: false
	}
]

```

1. Set up some basic HTML that contains a `<ul>`
1. Create a JS file that does the following:
1. Given the data array:
	- loop through the array and insert elements as `<li>` tags in the '<ul>'
		- the html of the `li` currently being inserted should be equal to the current data element's `name` property
		- add a quantity attribute to the `li`.  Set it equal to the quantity property of the current data element
		- if the isDangerous property on the current data element is true, add a 'dangerous' class to the current `li`.  Using CSS, make sure all elements with the 'dangerous' class are bold
1. Loop through all the `li` elements and delete them

## Advanced

Alter the last exercise so that instead of adding a quantity attribute for each element, the `li` element is created the number of times specified in the data element's quantity property
