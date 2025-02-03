// Scope means area, space, or region.
// Global scope means global space or a public space.
// Local scope means a local region or a restricted region.

// The Lexical Scope is also called Static Scoping.The lexical scope is the scope to the vatiable during compilation.
// Lexical scope is the definition area of an expression.
// In other words, an item's lexical scope is the place in which the item got created.

// Var:- They are help to define the global & function scoped variables.

// function fun(){
//     console.log("This is the region of Var.");
//     console.log("The value of x is " ,x);
//     var x = 10;
//     console.log("The value of x is",x);
// }
// fun();
//Output:
// This is the region of Var.
// The value of x is  undefined
// The value of x is 10

// function gun(){
//     console.log("This is the region of Let.");
//     console.log("The value of y is " ,y);
//     let y = 20;
//     console.log("The value of y is " ,y);
// }
// gun();

// Output:-
// This is the region of Let.
// VM297:3 Uncaught ReferenceError: Cannot access 'y' before initialization
//     at gun (<anonymous>:3:39)
//     at <anonymous>:7:1

var teacher ="ABC";
function fun(){
    var teacher = "abc";
    console.log("Hello Teacher");
}
function gun(){
    var student="XYZ";
    console.log(student);
}
fun();
gun();

//Output:
// Hello Teacher
// XYZ