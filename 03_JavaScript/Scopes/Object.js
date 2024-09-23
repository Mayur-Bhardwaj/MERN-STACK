let product = {
  name: "Realme C25y",
  company: "Oppo",
  price: 11500,
  warrenty: "1 year",
  specification: "4 128",
  color: "Black",
};

//We find out the all keys of product

Object.keys(product);
Object.values(product);
//Output:- (6) ['name', 'company', 'price', 'warrenty', 'specification', 'color']

//this method takes one argument which is the object whose keys are expected to be fetched.
// Object.keys(product);


// It returns an array of strings, where each string represents a unique key.
// (6) ['name', 'company', 'price', 'warrenty', 'specification', 'color']

//To Fetch the Values of the Object
//Output:- (6) ['Realme C25y', 'Oppo', 11500, '! year', '4 128', 'Black']

// If we want that, we need to fetch all the availabe (values can be non unique of our object, then we can
// use the inbuilt method "Object.values".

// We want to fetch the individually keyValue pair so we use "Enteries" function.

Object.entries(product);

//Output:- (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Realme C25y']
// 1: (2) ['company', 'Oppo']
// 2: (2) ['price', 11500]
// 3: (2) ['warrenty', '! year']
// 4: (2) ['specification', '4 128']
// 5: (2) ['color', 'Black']
// length: 6 [[Prototype]]: Array(0)