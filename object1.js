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
fruit.prototype.y =11;
var banana = new fruit("sagor", "yellow", "dhaka");
console.log(banana);
banana.showDetails();
console.log(banana.y);
banana.x = 10;
console.log(banana);

console.log('                            :::::prototype pattern:::::                               ');
