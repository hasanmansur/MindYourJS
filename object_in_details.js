console.log("############################### property access ####################################");
var firstObject = {name: "hasan", id: "0", 100: "hundred"};
console.log(firstObject.id);
console.log(firstObject["100"]);

console.log("################################ save as value  ####################################");
var person = "hasan";
var anotherPerson = person;
console.log(person);
console.log(anotherPerson);
person = "mansur";
console.log(person);
console.log(anotherPerson);

console.log("############################## save as reference  ##################################");
var student = {name: "hasan", id: "000"};
var anotherStudent = student;
console.log(student);
console.log(anotherStudent);
student.name = "mansur";
console.log(student);
console.log(anotherStudent);

console.log('################################ object creation ###################################');
console.log('                             :::::object literal:::::                               ');
var mango1 = {color: "green", 
	shape: "round", 
	taste: "sour", 
	whatColorAmI: function () {
		return this.color;	
	}
};
console.log(mango1);
console.log(mango1.whatColorAmI());

console.log('                            :::::object constructor:::::                            ');
var mango2 = new Object();
mango2.color =  "yellow";
mango2.shape =  "round";
mango2.taste =  "sweet";
mango2.whatColorAmI =  function () {
	return this.color;
}
console.log(mango2);
console.log(mango2.whatColorAmI());

console.log('######################### practical patterns for object creation ####################');
console.log('                           :::::constructor pattern:::::                             ');
function fruit (fruitName, fruitColor, fruitLand) {
    this.fruitName = fruitName;
    this.fruitColor = fruitColor;
    this.fruitLand = fruitLand;
    this.showDetails = function () {
        console.log(this.fruitName + "-" + this.fruitColor + "-" + this.fruitLand);
    }
}
var banana = new fruit("sagor", "yellow", "dhaka");
console.log(banana);
banana.showDetails();

console.log('                            :::::prototype pattern:::::                               ');
function Fruit () {
}
Fruit.prototype.fruitName = "fruit";
Fruit.prototype.fruitColor = "color";
Fruit.prototype.fruitLand = "area";
Fruit.prototype.showDetails = function () {
	console.log(this.fruitName + "-" + this.fruitColor + "-" + this.fruitLand);
}
var testFruit = new Fruit();
console.log(testFruit);
testFruit.showDetails();

console.log('############################ Own & Inherited Property #################################');
console.log("banana has property 'fruitName':" + ("fruitName" in banana).toString() + ", own:" + (banana.hasOwnProperty("fruitName")).toString());
console.log("banana has property 'toString':" + ("toString" in banana).toString() + ", own:" + (banana.hasOwnProperty("toString")).toString());
console.log("testFruit has property 'fruitName':" + ("fruitName" in testFruit).toString() + ", own:" + (testFruit.hasOwnProperty("fruitName")).toString());
console.log("testFruit has property 'toString':" + ("toString" in testFruit).toString() + ", own:" + (testFruit.hasOwnProperty("toString")).toString());


