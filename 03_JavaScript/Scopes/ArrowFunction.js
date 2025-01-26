//Map 
// The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. 
// It skips empty elements and does not modify the original array.

const arr = [1,2,3,4,5];
arr.map(function fun(x){
    return x*2;
});

//Output:- (5) [2, 4, 6, 8, 10]

const a1 = [1,2,3,4,5];
const data = arr.map(function square(element){
    return element * element;
});
        console.log(data);  

//Output:-  (5) [1, 4, 9, 16, 25]

// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.