// If the value in the code is modified or updated then this mechanism is called "Mutability."
//If we do the modification then we use keyword "let" & "var".

// If we cannot do the modifications then this is called "Immutability".
// If we want the data will be immutable then we initialize with "const" keyword.

// let x = 100;
// x = 200;
// console.log("The value of x is: ", x);  //Example of mutability //O/p:- 200

// var y = 100;
// y = 200;
// console.log("The value of y is: ", y);  //Example of mutability //O/p:- 200

//Immutability

// const z = 500;
// z = 450;
// console.log("The value of z is: ", z);
// It throws an error. 
// TypeError: Assignment to constant variable.

//One more interesting fact b/w const , let, var. that we cannot leave the const only declare we also
// // used it.
// let a; // O/p:- undefined

// var a; // O/p:- undefined

// const a; // O/p:- 'const' must be initialized.

// const a = undefined;  //This will be run.

// Example of immutability is Let's say we have a DB connection, there is very less cases where we want to 
// update the configuration of this DB connection. Most of the time connection object is setup and don't
// want to change it.

// Pros
// Makes important configuration  non-modifiable.
// Less complex to manage.
// Less memory needed.

// Cons 
// We need to always in mind what to make mutable and what to make immutable.
// HAndling it in object is tricky. 

const obj = {
    x:10,               //O/p: { x: 10, y: 20 }
    y:20,
};
console.log(obj);

obj.z = 100; //Addition of more key value pair is allowed
console.log(obj);      //O/p:-  { x:10, y: 20, z: 100 }

obj = {a:10}
console.log(obj);       //O/p:- TypeError: Assignment to constant variable.

