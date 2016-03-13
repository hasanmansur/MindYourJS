//############################JS Scope###########################################
//###############################################################################

//############################case1###################################
/*
x = 1;
function myfunc(){
	x = 2
}
myvar = new myfunc()
console.log(x)
console.log(myvar.x)
*/
//############################case2###################################
/*
var x = 1;
function myfunc(){
	x = 2
}
myvar = new myfunc()
console.log(x)
console.log(myvar.x)
*/
//############################case3###################################
/*
x = 1;
function myfunc(){
	var x = 2
}
myvar = new myfunc()
console.log(x)
console.log(myvar.x)
*/
//############################case4###################################
/*
var x = 1;
function myfunc(){
	var x = 2
}
myvar = new myfunc()
console.log(x)
console.log(myvar.x)
*/
//############################case5###################################
/*
var x = 1;
function myfunc(){
	this.x = 2
}
myvar = new myfunc()
console.log(x)
console.log(myvar.x)
*/
//############################case6###################################
/*
var x = 1;
function myfunc(){
	var x = 10
	this.x = x
}
myvar = new myfunc()
console.log(x)
console.log(myvar.x)
*/
//############################case7###################################
/*
var x = 1;
function myfunc(){
	this.x = x
}
myvar = new myfunc()
console.log(x)
console.log(myvar.x)
*/
//############################case8###################################
/*
x = 1;
function myfunc(){
	this.x = x
}
myvar = new myfunc()
console.log(x)
console.log(myvar.x)
*/

















