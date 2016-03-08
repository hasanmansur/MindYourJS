console.log('#################### Prototype Property/Prototype Attribute ##################');

/*
Every JavaScript function has a prototype property (this property is empty by default), and you attach properties and methods on this prototype property when you want to implement inheritance. 

Every object inherits properties from some other object, and it is this other object that is the object’s prototype attribute or “parent.” (You can think of the prototype attribute as the lineage or the parent).
*/


function Class1() { 
    this.x = 10;
}

Class1.prototype.name = 'Main Class';

function Class2() {};
Class2.prototype = Object.create(Class1.prototype);

function Class3() {
    this.y = 11;
};
Class3.prototype = new Class1();

var class1Ins = new Class1();
var class2Ins = new Class2();
var class3Ins = new Class3();

console.log("--------------------------::class1 instance's parent::------------------------"); 
console.log(Object.getPrototypeOf(class1Ins));
console.log("----------------------------::class1 instance::-------------------------------");
console.log(class1Ins); //both 'name' & 'x' exists, but 'name' isn't printed as its an inherited property
console.log(class1Ins.name);
console.log(class1Ins.x);
console.log("--------------------------::class2 instance's parent::------------------------"); 
console.log(Object.getPrototypeOf(class2Ins)); // only 'name' exists, but 'name' isn't printed as its an inherited property
console.log(Object.getPrototypeOf(class2Ins).name);
console.log("----------------------------::class2 instance::-------------------------------");
console.log(class2Ins); // only 'name' exists, but 'name' isn't printed as its an inherited property
console.log(class2Ins.name);
console.log(class2Ins.x); // 'undefined' as it has only inherited property 'name'
console.log("--------------------------::class3 instance's parent::------------------------"); 
console.log(Object.getPrototypeOf(class3Ins)); //both 'name' & 'x' exists, but 'name' isn't printed as its an inherited property
console.log(Object.getPrototypeOf(class3Ins).name);
console.log(Object.getPrototypeOf(class3Ins).x);
console.log("----------------------------::class3 instance::-------------------------------");
console.log(class3Ins); //'name','x', 'y' exists, but 'name' & 'x' aren't printed as they are inherited
console.log(class3Ins.name);
console.log(class3Ins.x);
console.log(class3Ins.y);

console.log('################################ constructor property ########################');
console.log("-------------------------::created with constructor function::----------------");
console.log(class1Ins.constructor);
console.log(class2Ins.constructor);
console.log(class3Ins.constructor);
console.log("-----------------------------::created with new Object()::--------------------");
var myObj = new Object ();
console.log(myObj.constructor);
console.log("---------------------------::created with Object literal::--------------------");
var myAnotherObj = {name: "hasan"};
console.log(myAnotherObj.constructor);

console.log('################################ Prototype-based Inheritance #################');

function Plant () {
	this.country = "Bangladesh";
	this.isOrganic = true;
}

Plant.prototype.showNameColor = function () {
	console.log("name:" + this.fruitName + ", color:" + this.fruitColor);
}

function Fruit (fruitName, fruitColor) {
	this.fruitName = fruitName;
	this.fruitColor = fruitColor;
	this.showCountryOrganic = function () {
		console.log("country:" + this.country + ", organic:" + this.isOrganic);
	}
}

Fruit.prototype = new Plant();

/*
instance of Fruit now has inherited properties 'country', 'isOrganic' from Plant & inherited method 'showNameColor' from Plant.prototype
*/
var banana = new Fruit("banana", "yellow");
banana.showNameColor();
banana.showCountryOrganic();



