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
    let arr = [10,20,30,40];
    let arr2 = [100,200,300,400];
    
    let [...rest] = arr;
    let [...rest1] = arr2;
    console.log(rest);
    console.log(rest1);

    const num = [...rest];
    const num1 = [...arr2];

    console.log(` this is direct spread ${num1}`);
    console.log(`this is rest and then spread ${num}`);
    console.log(num);
    console.log(num1);