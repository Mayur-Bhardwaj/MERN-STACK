// Function Scope:- Variables defined inside a function are not accessible (visible) from outside the function.

function fun(){
    let x = 10;
    console.log(x);
}
function gun(){
    for(let i=1; i<x; i++){}    //x is not visible
}

console.log("The value of X is :",x);   //x is not visible