// let product = {
//   name: "Realme C25y",
//   company: "Oppo",
//   price: 11500,
//   warrenty: "1 year",
//   specification: "4 128",
//   color: "Black",
// };

// //We find out the all keys of product

// Object.keys(product);
// Object.values(product);
// //Output:- (6) ['name', 'company', 'price', 'warrenty', 'specification', 'color']

// //this method takes one argument which is the object whose keys are expected to be fetched.
// // Object.keys(product);


// // It returns an array of strings, where each string represents a unique key.
// // (6) ['name', 'company', 'price', 'warrenty', 'specification', 'color']

// //To Fetch the Values of the Object
// //Output:- (6) ['Realme C25y', 'Oppo', 11500, '1 year', '4 128', 'Black'];

// // If we want that, we need to fetch all the availabe (values can be non unique of our object, then we can
// // use the inbuilt method "Object.values".

// // We want to fetch the individually keyValue pair so we use "Enteries" function.

// Object.entries(product);

// //Output:- (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// // 0: (2) ['name', 'Realme C25y']
// // 1: (2) ['company', 'Oppo']
// // 2: (2) ['price', 11500]
// // 3: (2) ['warrenty', '1 year']
// // 4: (2) ['specification', '4 128']
// // 5: (2) ['color', 'Black']
// // length: 6 [[Prototype]]: Array(0)

// //How we check the number of key value pair in the object?

// // We can use the above method. Let's say we use Object.keys, it will return an array with all the unique 
// // keys, and the length of the array can be our answer.
// // Because all the keys are unique, we have entry of each unique key in the response array, so lenfth of 
// // the array will be denoting the number of key value pairs.
// // Ex:- Object.keys(product).length;

// // Why it is tricky to handle immutability in objects ?
// // If we have a "const" based  object initialization or objects then it doesn't make the object fully
// // immutable.

// // const obj = {x:10,y:20};
// // console.log(obj);   //Output:- { x: 10, y: 20 }

// // const obj1 = {x:10,y:20};

// // obj1.z = 45;  //Addition of more key value pair.
// // console.log(obj1);   //Output:- { x: 10, y: 20, z: 45 }


// // const obj2 = {x:10, y:20};

// // obj2.x = 90;  //Allowed to update value of key

// // console.log(obj2);  //Output:- { x: 90, y: 20 }

// const onj =  {a:10};  //Not allowed 
// console.log(onj);   //Output:- SyntaxError: Invalid left-hand side in assignment


// //Obj.Seal --> By uisng this we cannot add a new key value pair or delete a exising key value pair.
// //But we can update the key-value pair.

// const product1 = {
//   name: "Iphone 16 pro max",
//   price: 180000,
// };
// Object.seal(product1);
// console.log(product1);  //Output:- { name: 'Iphone 16 pro max', price: 180000 }

// //Now we want to add a new key value pair but not added, by this method we cannot added or delete the object.

// product1.company = "Oppo";
// console.log(product1);  //Output:- { name: 'Iphone 16 pro max', price: 180000 }

// //But we can update the product

// product1.name = "Realme 14 pro";

// console.log(product1);  //Output:- { name: 'Realme 14 pro', price: 180000 }


// //Object.freeze():- 
// // The Object.freeze() method prevents any changes to an object.

// const data={
//   name:"Javascript",
//   library:"React JS",
// };
// Object.freeze(data);
// console.log(data);  //Output:-  { name: 'Javascript', library: 'React JS' }


// product.library="Angular JS";
// console.log(data);    //Output:- { name: 'Javascript', library: 'React JS' }

// //In seal we can update the value but in freeze the value is not updated.

// //To check whether the object is froxen or not.

// Object.isFrozen(product1);

// const x ={a:1000}
// console.log(x);
// Object.isFrozen(x);

// //Prevent Extension --> Object.preventExtension, in this we cannnot add new key value pair. 
// We can remove existing key vslue pair. Update is allowed.

const q ={a:10};
Object.preventExtensions(q);
q.b = 99;
console.log(q); //Output:- { a: 10 }

delete q.a;
console.log(q); //Output:- {}

//Object.defineProperties -- If we want there are 5 keys and in obj we want to 2 keys will be update only then we use it.

const s = { v : 56};
Object.defineProperty(s,'v', {WritableStream:false});
s.v=99;
console.log(s);
Object.defineProperty();