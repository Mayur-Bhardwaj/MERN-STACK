// Default Parameter

// function add(x, y){
//     return x+y;
// }
// console.log(add(10,20));    //Output:- 30

// function add(x, y=5){
//     return x+y;
// }

// console.log(add(10));   //Output:- 15
// Default Parameter

// function add(x, y=5){
//     return x+y;
// }
// console.log(add(10,20));    //Output:- 30

// function add(x,y=5,z){
//     console.log(x);          //Output:- 10 
//     console.log(y);          //Output:- 5
//     console.log(z);          //Output:- undefined

//     return x+y+z;             //Output:- NaN
// }

// console.log(add(10));

function add(x,y=5,z){
    console.log(x);          //Output:- 10 
    console.log(y);          //Output:- 55
    console.log(z);          //Output:- 5

    return x+y+z;             //Output:- 70
}

console.log(add(10,55,5));