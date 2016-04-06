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

/*
Make Sure Callback is a Function Before Executing It
*/
console.log("--------------------------------------------------------------------------");
function getInput (name, cb) {
    if(typeof cb === "function") {
        cb(name);
    }
    else {
        console.log(typeof cb);
    }
}

function printInput (x) {
    console.log(x);
}

getInput("hasan", printInput);
console.log("--------------------------------------------------------------------------");

/*
Multiple Callback Functions Allowed
*/
function successCallback(res) {
    return res;
}

function errorCallback(res) {
    return res;
}

function hello(x, cb) {
    var outCompare = compare(x);
    var finalResult;
    if(outCompare.status == "OK") {
        finalResult = cb.success(outCompare);
    }
    else {
        finalResult = cb.error(outCompare);
    }
    return finalResult;
}

function compare(str) {
    var predefinedStr = "hasan";
    if(str == predefinedStr) {
        return {status: "OK", result: {id: 1}};
    }
    else {
        return {status: "error", code: 404, message: "not found"};
    }
}

console.log(hello("hasan", {success: successCallback, error: errorCallback}));
