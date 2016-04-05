/*
A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction.

When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function. This means the callback is a closure. 
As we know, closures have access to the containing function’s scope, so the callback function can access the containing functions’ variables, and even the variables from the global scope.
*/

function childFunction (x, y, z) {
    console.log("hello from childFunction");
    return x + y + ":" + z;
}

function fatherFunction (fname, lname, stat, cb) {
    console.log("hello from fatherFunction");
    return cb(fname, lname, stat, childFunction);
}

function grandFunction (firstname, lastname, cb) {
    console.log("hello from grandFunction");
    var status = "sw-engineer";
    fatherFunction(firstname, lastname, status, cb);
}

grandFunction ("hasan", "mansur", function (fn, ln, st, cb) {
    console.log(cb(fn, ln, st));
});
