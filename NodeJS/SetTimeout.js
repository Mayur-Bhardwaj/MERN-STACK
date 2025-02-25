console.log("Start");
setTimeout(function fun(){
    console.log("SetTimeOut");
},3000);
console.log("End");

//Output:
// Start
// End
// SetTimeOut   //It will print after 3 sec.

console.log("Start");
function fun(){
    console.log("Inside Function");
    setTimeout( function gun(){
        console.log("Inside SetTimeOut");
    },2000);
}
fun();

console.log("End");

//Output:-
// Start
// Inside Function
// End
// Inside SetTimeOut // It will print after 2 sec