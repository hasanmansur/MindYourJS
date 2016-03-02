console.log('#################### Prototype Property ##################');

/*
Every JavaScript function has a prototype property (this property is empty by default), and you attach properties and methods on this prototype property when you want to implement inheritance. 

Every object inherits properties from some other object, and it is this other object that is the object’s prototype attribute or “parent.” (You can think of the prototype attribute as the lineage or the parent).
*/
function employee (name, id) {
    this.name = name;
    this.id = id;
}




