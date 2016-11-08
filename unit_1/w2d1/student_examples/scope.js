// console.log("scope");
// var test = "I am here"
// var iSeeYou = function () {
//   return test
// }
// console.log(iSeeYou());
//
// var iCannotSeeYou = function () {
//   return test
// }
// console.log(iCannotSeeYou());

var parent = function() {
    var parentVar = true;

    var child = function() {
      console.log(parentVar);
        var childVar = true;
    }
    child();
}
parent();


    // console.log(parent);
