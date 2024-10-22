// Block Scope:- Variables declared inside a { } block cannot be accessed from outside the block.
if(10>20){
    // This is the block of If. 
    //Any code written here is meant to be inside the block of If.
}
else{
    // This is the block of Else. 
    //Any code written here is meant to be inside the block of Else.
}
{
    let x = 10;
    console.log(x);  // x is visible because we tried it written the scope.
}
console.log(x);     // Here x is not visible, hence it throws the error.