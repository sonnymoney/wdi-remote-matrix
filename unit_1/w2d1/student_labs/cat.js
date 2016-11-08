var cat ={
  name:"Lady",
  breed: "Siamese",
  age:6
}
// console.log(cat.age);
// console.log(cat.breed);
cat.favoriteThings = ["scratching post","laser pointer","duck pate"]
// console.log(cat.favoriteThings);
// console.log(cat.favoriteThings[2]);
cat.owner = {
  name: "Kelly Franklin",
  occupation: "Stenographer"
}

var occupationChange = function(object) {
  object.occupation = "crazy cat lady";
};


// console.log(cat.owner.occupation); // Stenographer
occupationChange(cat.owner); // converts Stenographer to Crazy Cat lady
console.log(cat.owner.occupation) //crazy cat lady
//
// console.log(dog.owner.occupation); // Coder
// occupationChange(dog.owner); // converts Stenographer to Crazy Cat lady
// console.log(dog.owner.occupation) //crazy cat lady
