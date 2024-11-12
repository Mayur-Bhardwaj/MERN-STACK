// Type Conversion Types:- 1. Explicit Type Conversion.   2. Implicit Type Conversion. 
//1. Explicit Type Conversion:-  These conversion is done by the debelopers. Manually we convert the one type to another.
// 2. 1. Implicit Type Conversion:-  These conversion is done by JS from one type to another type.

let x = 3; 
console.log(!x);     //false. Because 3 is truthy value and not make it falsy value.

const obj={}
console.log(!obj);      //false

let y = "";
console.log(!y);    //true Because the empty string gives the falsy value.

var z = "false";
console.log(!z);      //false 

// Note:- !(NOT Operator, boolean ke upper lagne ke liye bnaya gya hai) 3 is no. but js internally convert into boolean.This is called Implicit Type Conversion.
