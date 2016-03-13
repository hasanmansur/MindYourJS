console.log("################################ Variable Scope ###############################");

console.log("----------------------Local Variable/Function Level Scope----------------------");

/*
Variables declared within a function are local variables and are only accessible within that function or by functions inside that function.
*/
var name = "hasan";
function showName () {
	var name = "mansur";
	console.log("name is from local scope:" + name);
}

console.log("name is from global scope:" + name);
showName();

/*
If we don't declare our local variables with the var keyword, they are part of the global scope​
*/
console.log(":::::::::::::::::::::::::::::::::::::");
var fruit = "banana";

function showOrdinaryFruit () {
	return fruit;
}

function showCelebrityFruit () {
	fruit = "mango";
	return fruit;
}

console.log("global fruit is not changed:" + showOrdinaryFruit());
showCelebrityFruit();
console.log("global fruit is now changed:" + showOrdinaryFruit());

console.log(":::::::::::::::::::::::::::::::::::::");


/*
If we declare a global variable and a local variable with the same name, the local variable will have priority when we attempt to use the variable inside a function
*/

var user = "hasan";

function showUser () {
    var user = "mansur";
    console.log("user from local scope:" + user);
}

showUser();

console.log("--------------------------------------Global Scope-----------------------------");

function showMyName1 () {
    myName = "hasan";
    console.log(myName);
}

function showMyName2 () {
    console.log(myName);
}
showMyName1();
showMyName2();

/*
If a variable is initialized (assigned a value) without first being declared with the var keyword, it is automatically added to the global context and it is thus a global variable
*/
console.log(":::::::::::::::::::::::::::::::::::::");
function showAge () {
    age = "99";
    console.log(age);
}
showAge();
console.log(age);

console.log(":::::::::::::::::::::::::::::::::::::");
for (i = 0; i < 3; i++) {
}
function aNumber () {
    console.log(i);
}
aNumber();

