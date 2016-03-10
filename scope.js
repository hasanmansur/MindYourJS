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
If you don't declare your local variables with the var keyword, they are part of the global scope​
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

