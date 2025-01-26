// function fun(){
//     //Block of Function.
// }

// //We can also store a function in a variable.
//  const arr= function myfun(){
//     //Block of Function.
//  }

// 1. Named Function. 

   const myfunction = function f1(x){
    console.log("This is Named Function.");
    console.log(x);
 }
 myfunction(10);

 //Output:- This is Named Function.
//  10

// Anonymous Function --> Means where we cannot give the name of the function.

const fun = function (y){
    console.log("This is Anonymous Function.")
}
fun(20);