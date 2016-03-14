console.log("################################### Variable Hoisting #############################");

/*
All variable declarations are hoisted (lifted and declared) to the top of the function, if defined in a function, or the top of the global context, if outside a function.

Only variable declarations are hoisted to the top, not variable initialization or assignments.
*/

function showName () {
    console.log("name:" + name); // undefned as only declaration is hoisted
    name = "hasan";
    console.log("name:" + name); // prints 'hasan'
    var name;
}
showName();

/*
function declaration takes precedence over variable declarations (but not over variable assignment).
variable assignment is not hoisted, and neither is function assignment.
*/
console.log("################################### Function Hoisting #############################");
var myName;
function myName () {
    console.log ("hasan");
}
console.log(typeof myName); // function

console.log("::::::::::::::::::::::::::::::::::::::::");
var myName = "hasan";
function myName () {
    console.log ("hasan");
}
console.log(typeof myName); // string


