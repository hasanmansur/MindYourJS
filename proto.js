console.log('#################### Prototype Property ##################');
function employee (name, id) {
    this.name = name;
    this.id = id;
    
}

var sharif  = new employee("sharif", "1");
var shahadat = new employee("shahadat", "2");

employee.prototype.company = "synchronous";
console.log(employee.prototype);
console.log("company" in sharif);
console.log(employee.constructor);




