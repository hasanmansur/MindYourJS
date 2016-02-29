console.log('\n######################################################');
console.log('\n############Prototype Property/Attribute##############');
console.log('\n######################################################');

var userAccount = {name:'Mike'};
console.log(userAccount.constructor.toString());

var userAccount = new Object();
console.log(userAccount.constructor.toString());

function Account(){	
}
var userAccount = new Account();
console.log(userAccount.constructor.toString());

Account.prototype.test = "test";
console.log(Account.prototype);
console.log(userAccount);
console.log(userAccount.test);

console.log(Object.prototype);
Object.prototype.hello = "hello";
console.log(Object.prototype);
var userAccount = new Object();
console.log(userAccount.hello);

console.log('\n######################################################');
console.log('\n#############Prototype-based Inheritance##############');
console.log('\n######################################################');

function Plant () {
	this.country = "Mexico";
	this.isOrganic = true;
}
Plant.prototype.weather = "Round the year";
console.log(Plant.prototype);

function Fruit (fruitName, fruitColor){
	this.name = fruitName;
	this.color = fruitColor;
}
Fruit.prototype = new Plant();
console.log(Fruit.prototype);

var aBanana = new Fruit ("Banana", "Yellow");
console.log(aBanana);
console.log(aBanana.name);
console.log(aBanana.color);
console.log(aBanana.country);
console.log(aBanana.isOrganic);
console.log(aBanana.weather);


