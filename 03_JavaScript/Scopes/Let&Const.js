// Let Keyword
// The let keyword was introduced in ES6 (2015). Variables declared with let have Block Scope.
// Variables declared with let must be Declared before use. Variables declared with let cannot be Redeclared in the same scope.
// Both two keywords(let & const) provided Block Scope in JavaScript
// Ex:-
{
    let x = 2;
  }
  // x can NOT be used here

  function fun(){
    console.log(x); //undefined
    var x = 10;
    console.log(x); //10
  }
  fun();

  function fun2(){
    console.log(x2);
    let x2 = 20;
    console.log(x2);
  }
fun2();
// Output:- 
// ReferenceError: Cannot access 'x2' before initialization

// Similarly donw with "const".

function fun3(){
    console.log(x3);
    const x3 = 30;
    console.log(x3);
}
fun3();
// Output:-
// Uncaught ReferenceError: Cannot access 'x3' before initialization

// Temporal Dead Zone
// The Temporal Dead Zone (TDZ) is a concept in JavaScript that relates to the hoisting of the variables and the visibility of variables declared with let and const.
// In the TDZ, a variable exists but it cannot be accessed until it is not declared. This prevents the variable from being used or accessed before a value is assigned to it.

// Ex:-
console.log(a);
a=12;
let a;
// Output:-   Reference error: Can not  access 'a' before its initialization.
//To avoid TDZ issues, it's important to declare variables before trying to access it