// let product={
//     name: "Realme C25y",
//     price: 11500,
//     discount: 15,
//     isAvailable: false
// };      //Necessary use colon at the end of curly braces
// console.log(product); //Output:- { name: 'Realme C25y', price: 11500, discount: 15, isAvailable: false }

// let socialHandles = {
//     fb: 9000,
//     insta: 6700,
//     "LinkedIn": 5677,
//     X: 4500
// }
// console.log(socialHandles); //Output:-  { fb: 9000, insta: 6700, LinkedIn: 5677, X: 4500 }

let socialHandles = {
  fb: { x: 10 },
  insta: 6700,
  LinkedIn: 5677,
  X: 4500,
};
console.log(socialHandles); //Output:-  { fb: { x: 10 }, insta: 6700, LinkedIn: 5677, X: 4500 }

//Note: In key if we pass value then the js make it String.

// Note: If we make two similar objects then they override 1st value of object to the 2nd value.

let duplicateObject = {
  insta: 3400,
  insta: 4500,
};
console.log(duplicateObject); //Output:- { insta: 4500 }
