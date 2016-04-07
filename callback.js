/*
A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction.

When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function. This means the callback is a closure. 
As we know, closures have access to the containing function’s scope, so the callback function can access the containing functions’ variables, and even the variables from the global scope.
*/
console.log("--------------------------------Call Back Function---------------------------------------------------");
function childFunction (x, y, z) {
    console.log("----hello from childFunction");
    console.log("-----" + x + y + ":" + z);
    console.log("----bye from childFunction");
}

function fatherFunction (fname, lname, stat, cb) {
    console.log("--hello from fatherFunction");
    cb(fname, lname, stat, childFunction);
    console.log("--bye from fatherFunction");
}

function grandFunction (firstname, lastname, cb) {
    console.log("-hello from grandFunction");
    var status = "sw-engineer";
    fatherFunction(firstname, lastname, status, cb);
    console.log("-bye from grandFunction");
}

grandFunction ("hasan", "mansur", function (fn, ln, st, cb) {
    console.log("---hello from callback");
    cb(fn, ln, st);
    console.log("---bye from callback");
});

/*
Make Sure Callback is a Function Before Executing It
*/
console.log("-------------------------Make Sure Callback is a Function Before Executing It---------------------------");
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

/*
Multiple Callback Functions Allowed
*/
console.log("------------------------------------Multiple Callback Functions------------------------------------------");
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

/*
Code below is called 'callback hell' because of the difficulty of following the code due to the many callbacks.

Two solutions to this problem:
1. Name your functions and declare them and pass just the name of the function as the callback, instead of defining an anonymous function in the parameter of the main function.
2. Modularity: Separate your code into modules, so you can export a section of code that does a particular job. Then you can import that module into your larger application.

*/
console.log("-------------------------------------------Callback Hell----------------------------------------------");

function innermost (str, cb) {
    console.log("-----hello from innermost");
    cb(str);
    console.log("-----bye from innermost");
}
function inner (str, cb) {
    console.log("---hello from inner");
    cb(str);
    console.log("---bye from inner");
}
function global (str, cb) {
    console.log("-hello from global");
    cb(str);
    console.log("-bye from global");
}

global("hello", function (x) {
    console.log("--calling inner");
    inner(x, function (x) {
        console.log("---calling innermost");
        innermost(x, function (x) {
            console.log("------" + x);
        });
        console.log("---returned from innermost");
    });
    console.log("--returned from inner");
});


