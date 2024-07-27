//Break

// let i = 1;
// while(i<=10){
//     if(i%7==0)
//         break;              //Output:- 1,2,3,4,5,6.
//     console.log(i);
//     i+=1;
// }

// console.log("end");

let i = 1;

while(i <=10 ){
    if(i%7 == 0){
        i++;    //Output:- 1,2,3,4,5,6,7,8,9,10
        continue;
    }
    console.log(i);
    i++;
}