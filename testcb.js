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
