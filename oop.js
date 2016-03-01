var x = 0;
function animal () {
    this.x = 1;
    var x = 2; 
    console.log(x);
    x = this.x;
    console.log(x);
    return 500;
}

function t () {
    return 99;
}

console.log(x);
console.log(animal());
console.log(x);
console.log(t());

