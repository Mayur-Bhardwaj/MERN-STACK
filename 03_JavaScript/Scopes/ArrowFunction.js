//Map 
// The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. 
// It skips empty elements and does not modify the original array.

//Double of number.

const arr = [1,2,3,4,5];
arr.map(function fun(x){
    return x*2;
});

//Output:- (5) [2, 4, 6, 8, 10]


//Square of number.
const a1 = [1,2,3,4,5];
const data = arr.map(function square(element){
    return element * element;
});
 console.log(data);  

//Output:-  (5) [1, 4, 9, 16, 25]

//Cube of number

const array = [1,2,3,4,5];
const number = array.map(function cube(c1){
        return c1*c1*c1;
});
console.log(number);

//Output:-  [ 1, 8, 27, 64, 125 ]


// Arrow Function

// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
//Also called the Fat Arrow Function.

//Find the square using arrow function.

const square = (x) => x*x;
console.log(square(4));  // 16
//If there are more than 1 argument then parenthesis is required.
//Find cube using Arrow Function.

const cube = (x) => x*x*x;
console.log(cube(5));   //125.

// Another way

const result = function f(no){
    return no*no*no;
}
console.log(result(7)); //343.