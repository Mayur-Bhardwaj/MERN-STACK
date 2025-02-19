// Global Scope:- Variables declared Globally (outside any function) have Global Scope.
                    //  Global variables can be accessed from anywhere in a JavaScript program.
                    // Variables declared with var, let and const are quite similar when declared outside a block.
// Ex:-

    // let x = 10;     //Global Value
    // function fun(){
    //     console.log(x);
    // }
    // fun();

    // console.log("The Value of X is: ",x);
//Output:- 
// 10
// The Value of X is:  10

//Note:-  If we would define x inside the function fun(), then we would not have been able to access
// "x" outside the function.

//If we define the "x" inside the function then ,
// Ex:- 2

    
function fun(){
    let x = 10; 
    console.log(x);
}
fun();

console.log("The Value of X is: ",x);

// Output:- ReferenceError: x is not defined

var x = 10;
function fun(){
    var x = 20;
    console.log(x); 
}
var x = 30;
fun();
console.log(x); 

//Output:-
//20
//30

var x =30;
for(var x=1; x<3; x++ )
    console.log(x);
console.log("X after Loop is:- ", x);