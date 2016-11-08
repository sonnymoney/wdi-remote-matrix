// console.log("swag");

// var dog = {
//   name: "Ace",
//   age: "28"
// };
// console.log(dog);

// var celebrity = {
//   name: "Elvis 'The King' Presley",
//   age: 77,
//
// }

// var macros = {
//
// };

// macros.protein = '5g';
// console.log(macros.protein);

// var guitar = {
//   strings: "6",
//   isAcoustic: true
// }
// guitar.strings = 100;
// guitar.isAcoustic = false
// guitar.belongsTo
//
// console.log(guitar);
//
// var adventurer = {
//   name: "Timothy",
//   hitpoints: 10,
//   belongings: ["sword","potion","Tums"],
//   companion: {
//     name: "Velma",
//     type: "Bat"
//   }
// }
//
// // console.log(adventurer.belongings.push('Vogue Magazine'));
// console.log(adventurer.companion.name);

var user = {
  name:"Bob",
  email: "Bob@gmail.com",
  age: "37",
  purchased: [],
}
user.name = "Rob",
user.email = "Rob@gmail.com",
user.age++,
user.location = "San Diego",
user.purchased.push("carbohydrates"),
user.purchased.push("peace of mind"),
user.purchased.push("Merino jodhpurs")
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "San Bernadino",
    purchased: []
},
user.friend.age = 55,
user.friend.purchased.push("The One Ring"),
user.friend.purchased.push("A latte")
// console.log(user.friend.name);
// console.log(user.friend.location);
// console.log(user.friend.age);
// console.log(user.purchased[2]);

for (i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

// for (i = 0; i < user.purchased.length; i++) {
//   console.log(user.friend.purchased[i]);
// }
// console.log(user.friend.purchased[0]);
// console.log(user.friend.purchased[1]);

var updateUser = function() {
  user.age++;
  user.name = user.name.toUpperCase();
}

console.log();
