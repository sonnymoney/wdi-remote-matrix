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
