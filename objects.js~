console.log('\n######################################################');
console.log('\n####################object creation###################');
console.log('\n######################################################');

console.log('\n-------------------object literal---------------------')
var myfirstobject = {name:"john", roll:"1", showname:function(){console.log(this.name)}};
console.log(myfirstobject);
myfirstobject.showname();

console.log('\n-------------------object constructor-----------------')
var mysecondobject = new Object();
mysecondobject.name = "david";
mysecondobject.roll = "2";
mysecondobject.showname = function(){console.log(this.name)};
console.log(mysecondobject);
mysecondobject.showname();

console.log('\n######################################################');
console.log('\n#########practical patterns for creating objects######');
console.log('\n######################################################');

console.log('\n--------------Constructor Pattern---------------------');
function fruit(color,name,land){
	
	this.color = color;
    	
	this.name = name;
    	
	this.land = land;
    	
	this.showDetails = function(){
    	
	console.log(this.name +" is " +this.color + " & found in " + this.land);
    
}
}


var mango = new fruit("green","mango","bangladesh");

mango.showDetails();

console.log(mango);
var banana = new fruit("yellow","banana","bangladesh");

banana.showDetails();
console.log(banana);



console.log('\n----------------Prototype Pattern---------------------');
function Fruit(){
}
Fruit.prototype.color = "red";
    	
Fruit.prototype.name = "strawberry";
    	
Fruit.prototype.land = "germany";
    	
Fruit.prototype.showDetails = function(){
    	
	console.log(this.name +" is " +this.color + " & found in " + this.land);
    
}
var strawberry = new Fruit();
strawberry.showDetails();
console.log(strawberry);

console.log('\n######################################################');
console.log('\n################Own & Inherited Property##############');
console.log('\n######################################################');

console.log("name is mango's property:");console.log("name" in mango);
console.log("toString is mango's property:");console.log("toString" in mango);

console.log("name is mango's own property:");console.log(mango.hasOwnProperty("name"));
console.log("toString is mango's own property:");console.log(mango.hasOwnProperty("toString"));
mango.type = "himsagar";
console.log("type is mango's own property:");console.log(mango.hasOwnProperty("type"));

console.log("name is strawberry's own property:");console.log(strawberry.hasOwnProperty("name"));
console.log("toString is strawberry's own property:");console.log(strawberry.hasOwnProperty("toString"));
strawberry.taste = "sweet";
console.log("taste is strawberry's own property:");console.log(strawberry.hasOwnProperty("taste"));

fruit.prototype.weather = 'hot';

console.log("mango's weather is: ");console.log(mango.weather);

console.log("banana's weather is: ");console.log(banana.weather);
console.log("weather is mango's own property:");console.log(mango.hasOwnProperty("weather"));
console.log("weather is banana's own property:");console.log(banana.hasOwnProperty("weather"));

console.log('\n######################################################');
console.log('\n################Object Property Deletion##############');
console.log('\n######################################################');

delete mango.name;console.log("name property of mango is now: ");console.log(mango.name);
delete mango.toString;console.log("toString property of mango is now: ");console.log(mango.toString);
delete mango.weather;console.log("weather property of mango is now: ");console.log(mango.weather);
delete fruit.prototype.weather;console.log("weather property of mango is now: ");console.log(mango.weather);
delete strawberry.taste;console.log("taste property of strawberry is now: ");console.log(strawberry.taste);

console.log('\n######################################################');
console.log('\n##############Object Serialize Deserialize############');
console.log('\n######################################################');
var mangostr = JSON.stringify (mango);console.log(mangostr);
var mangoObj = JSON.parse(mangostr);console.log(mangoObj);
console.log(mango);
