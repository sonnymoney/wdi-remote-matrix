var grabBag = ["shoe","true","99","null"];
console.log(grabBag);

var teachers = ["Matt","Thom","Kristyn","Karolin"];
console.log(teachers[2]);

// Commit "1st commit - those were easy array question"

var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

function median(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

median(nums);

// commit "2nd commit - finished Find the Median array question "

var kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// Thom's closet is more complicated. Check out this nested data structure!!
var thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + "today!");

var kristynShoe = kristynsCloset[0];
console.log (kristynShoe);


kristynsCloset.splice((kristynsCloset.length - 1), 0, "raybans" );
console.log(kristynsCloset);

kristynsCloset[5] = 'stained knit hat';
console.log(kristynsCloset);

// 3rd commit "3rd commit - finished looking through Kristyn's closet array"

thomsCloset[0][0];
thomsCloset[1][1];
thomsCloset[2][2];

console.log("Thom's swag is on 10 when he wears his " + thomsCloset[0][0] + " and " + thomsCloset[1][1] + " with the classic " + thomsCloset[2][2]) + "!";

thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset);

// "4th commit - finished looking through Thom's closet array"

var i = 0;

while(i < 10) {
console.log("Feed me, I'm hungry!");
i++;
}

for(i = 0; i < 10;) {
	console.log("printout number " + (i + 1) + " of 10");
	i++;
}

// "5th commit - finished with the easy loop questions"

console.log(grabBag[1]);

for(i = 0;i < 4;) {
  console.log(grabBag);
}
