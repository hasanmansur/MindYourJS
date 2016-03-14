//############################ js hoisting ###################################

//#########case1#################

/*
var x = 1
function showX(){
	console.log(x)
	var x = 2
	console.log(x)
}
showX()
console.log(x)
*/

//#########case2#################
/*
x = 1;
function myfunc(){
	this.x = x
	var x = 99
	console.log(x)
}

console.log(x)
myvar = new myfunc()
console.log(myvar.x)
*/
//########case3#################
/*
var x
function x(){}
console.log(typeof x)
*/
//########case4#################
/*
var x = 1
function x(){}
console.log(typeof x)
*/
//########case5#################
/*
var x
function x(){}
x = 1
console.log(typeof x)
*/
