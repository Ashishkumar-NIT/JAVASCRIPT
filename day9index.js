// how functions are declared

// function greeting(){
//     console.log("Hello world!");
// }

// // function call
// greeting();

// // funcitons with arguments and parameters
// function addnumber(param1,param2){
//     let sum = param1 + param2;
//     console.log(`The sum of ${param1} & ${param2} : ${sum}`);
//     return 200;
// }
// addnumber(12,34);
// // The sum of 12 & 34 : 46
// addnumber(532,3344);
// // The sum of 532 & 3344 : 3876

// console.log(addnumber(100,200));

// rest Operator => ...rest

// function addnumber(...param){
//     let sum = 0;
//     for(let n of param){
//          sum += n;
//     }
//     console.log(sum);
    

// }
// addnumber(10,20,40);
// addnumber(1023,2340,40234);
// addnumber(12342340,2343220,42342340);


// ...rest V/s ...spread
    // let arr = [10,20,30,40];
    // let arr2 = [100,200,300,400];
    
    // let [...rest] = arr;
    // let [...rest1] = arr2;
    // console.log(rest);
    // console.log(rest1);

    // const num = [...rest];
    // const num1 = [...arr2];

    // console.log(` this is direct spread ${num1}`);
    // console.log(`this is rest and then spread ${num}`);
    // console.log(num);
    // console.log(num1);

    // Hoisting => it is a concpet of JS which is used in Function that means, 
    // we can call the function before it is initialized;

    // normal function:
    // console.log(addnumber(12,13));
    // function addnumber(num1,num2){
    //     return num1+num2;
    // }

    // function expression: storng the funciton in a  variable

   
    // const addnumber = function(num1,num2){
    //     return num1+num2;
    // }
    // console.log(addnumber(12,13));

// 3) Arrow function:
//  syntax: const variable_name = ()=> {
// }

// normal arrow syntax
// const square = (n)=> {
//     return n*n;
// };

// // arrow function when only single item is returned
// const square1 = (n)=> n*n;;

// // arrow fucntion when onyl single item is returned and single parameter is passed.
// const square2 = n=> n*n;;
// console.log(square(10));
// console.log(square1(11));
// console.log(square2(12));

// Arrow fucntions with objects

// const multiply = ()=> ({name: "ashish",age: 20})

// console.log(multiply());

//Types of function and there output  Square of two numbers:
// function squarenumber(n){ 
//     return n*n;
// }

// const squarenum = function(x){
//     return x*x;
// }

// const squareN = n => n*n;

// console.log(squarenumber(12))
// console.log(squarenum(13))
// console.log(squareN(14))

// let lst = NaN;
// console.log(lst);

// Arrow fucntions with objects

// const multiply = ()=> ({name: "ashish",age: 20})
// console.log(multiply());

const testing = ()=> ({user1: {name: "ashish",age: 20,city: "bangalore",marks: {ADA:80,NA:100,IC:60,PP:100}},
user2: {name: "mayank",age: 21,city: "kurukshetra",marks: {ADA:90,NA:90,IC:90,PP:90}},
user3: {name: "ansh",age: 19,city: "bangalore",marks: {ADA:100,NA:100,IC:100,PP:100}},
user4: {name: "laya",age: 18,city: "nepal",marks: {ADA:100,NA:90,IC:100,PP:100}}})
// const testing = ()=> ({name: "ashish", age: 20,city: "bangalore",marks: { ADA:80, NA:100,IC:60,PP:100}})
console.log(testing())
