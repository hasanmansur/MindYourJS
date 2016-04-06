var finalresult = function(a, b, fun){
    console.log('finalresult');
    a = a+3;
    b -=2;
    return fun(a,b,sy);
}

function sy(p,z){
    console.log('sy');
    p +=8;
    return p*z;
}

var result = finalresult(9,8,function(t,r,rt){
    console.log('result');
    return rt(t,r);
});

console.log(result);
