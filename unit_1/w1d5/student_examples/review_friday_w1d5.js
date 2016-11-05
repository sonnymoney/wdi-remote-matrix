// var numbers = [1,2,3,4,5];
// console.log(numbers);
//
// console.log("This is the length of the array:" + numbers.length);
//
// console.log("reversing numbers array:" + numbers.reverse());
//
// numbers.push("matrix");
// console.log("array after we pushed matrix:" + numbers);
//
// numbers.unshift("peanut");
// console.log("array after we unshifted peanut:" + numbers);
//
// numbers.pop();
// console.log("array after we popped: " + numbers);
//
// numbers.shift();
// console.log("array after we shifted: " + numbers);

// var kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
//
// console.log(kristynsCloset);
// console.log("Kristyn's first item" + kristynsCloset[0]);
// console.log(`Kristyn's third item ${kristynsCloset[2]}`);
//
// var thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
//
// console.log(thomsCloset[0]);
// console.log("Thom's pants: " + thomsCloset[1][2]);
// var thomsBedPants = thomsCloset[1][2];
// console.log(thomsBedPants);
//
// thomsBedPants = "adult onsie";
// console.log(thomsBedPants);
//
// console.log(thomsCloset[1]);

// functions
var addOne = function(num) {
  total = num + 1;
  console.log(total);
}
addOne(7);

var minusOne = function(num) {
  total = num - 1;
  console.log("My number minus one: " + total);
}
minusOne(4);
