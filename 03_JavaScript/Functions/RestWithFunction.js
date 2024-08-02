function fun(...values){
    console.log(values);
}

fun(10,20,30,40,50);    //Output:- [ 10, 20, 30, 40, 50 ]
fun(10, 20, 30, 40, 50, "Mayur", true );    //Output:-    [ 10, 20, 30, 40, 50, 'Mayur', true ]
// Arrays are heterogenous means at one time they can store the number, string or boolean.