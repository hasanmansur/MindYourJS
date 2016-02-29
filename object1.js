console.log("##################### property access ######################");
var firstObject = {name: "hasan", id: "0", 100: "hundred"};
console.log(firstObject.id);
console.log(firstObject["100"]);

console.log("##################### save as value  ######################");
var person = "hasan";
var anotherPerson = person;
console.log(person);
console.log(anotherPerson);
person = "mansur";
console.log(person);
console.log(anotherPerson);

console.log("##################### save as reference  ######################");
var student = {name: "hasan", id: "000"};
var anotherStudent = student;
console.log(student);
console.log(anotherStudent);
student.name = "mansur";
console.log(student);
console.log(anotherStudent);

console.log('#################### object creation ###################');


