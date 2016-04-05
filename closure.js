console.log("############################# Closures #############################");

/*
A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. 
The closure has three scope chains: 
it has access to its own scope (variables defined between its curly brackets), 
it has access to the outer function’s variables, 
and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters.
*/

function showName (firstName, lastName) {
    var intro = "your name is ";
    function makeFullName () {
        console.log(intro + firstName + lastName);
    }
    return makeFullName();
}
showName("hasan", "mansur");

console.log("::::::::::::::::::::::::::");

function grandPa (country) {
    var nameGrandFather = "grand father";
    function papa (city) {
        var nameFather = "father";
        function child (area) {
            var nameChild = "child";
            console.log("grand node: " + nameGrandFather);
            console.log("country: " + country);
            console.log("father node: " + nameFather);
            console.log("city: " + city);
            console.log("child node: " + nameChild);
            console.log("area: " + area);
        }
        return child("gulshan");
    }
    return papa("dhaka");
}
grandPa("bangladesh");

/*
Closures have access to the outer function’s variable even after the outer function returns
*/
console.log("-------------------------------------------------------------------");
function printName (firstName) {
    var intro = "your name is ";
    function makeFullName (lastName) {
        return intro + firstName + lastName;
    }
    return makeFullName;
}
var printFullName = printName("hasan");
console.log(printFullName("mansur"));

/*
Closures store references to the outer function’s variables; they do not store the actual value.
*/
console.log("-------------------------------------------------------------------");
function ID () {
    var id = 0;
    return {
        getId: function () {
            console.log(id);
        },
        setId: function (givenId) {
            id = givenId;
        }
    }
}

var myId = ID();
myId.getId(); //0
myId.setId(1);
myId.getId(); //1


