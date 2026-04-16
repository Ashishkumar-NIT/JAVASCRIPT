// // Scope / High Order Fucntion / Closure

// // types of scope
//     // Global scope variable = can be accesed from anywhere in the while: eg: inside funciton/switch/looping statement
//     // fucntional scope variable = can be accesed inside that function  block of code.
//     // block level scope variable = can be accesed where it is defined: eg: looping / conditional statements


//     let a = 70;
//     const b = 60;
//     var c = 50;
//     console.log(a);
//     console.log(b);
//     console.log(c);

//     // accesing the global variable inside a block of code
//     if(true){
//         let a = 10;
//         const b = 20;
//         var c = 30;


//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//         console.log(a);
//         console.log(b);
//         console.log(c);




//     // accesing the global variable inside to a fucntion
//     let user = ()=>{
//         let a = 30;
//         const b = 20;
//         var c = 10;


//         console.log(a)
//         console.log(b)
//         console.log(c)
//     } 
//     user();

//     console.log(a)
//     console.log(b);
//     console.log(c);

// function createCounter(){
//     let count = 0;

//     function increment(){
//         console.log(count++);
//     }
//     increment();
// }

// createCounter();



// Closure: A function that remembers the variable of it's outerscope even when the function has finished executing.
// closure usecase: prevent the dev from direct accesing some varibales, by making the private variables 
// let a = 10;
// console.log(typeof a);

// closure example using Banking system
// let balance = 1000;
// const user = {
//     name: "ashish",
//     age: 20,
//     withdraw: function(x){
//         if( x>0 && typeof x==="number" && x<= balance){
//             balance-=x;
//             console.log(`Withdrawl amount: ${x}`);
//             console.log(`Remaining Balance: ${balance}`)
//         }
//         else{
//             console.log(balance);
//         }
//         },
//     deposit: function(amount){
//         if(typeof amount ==="number"){
//             balance+=amount;
//             console.log(`Deposit amount: ${amount}`);
//             console.log(`New Balance: ${balance}`);   
//         }
//     },
//     getbalance: function(){
//         return balance;
//     }

// }
// user.balance= "ashish";
// console.log(typeof user.getbalance());
// direct acces to the variable
// user.balance= "ashish";
// console.log(user.balance);
// user.balance=1000;
// console.log(user.balance);
// user.withdraw(100);
// user.withdraw(200);
// user.withdraw(300);
// user.withdraw(400);
// user.withdraw(100);
// console.log(user.balance);
// user.deposit(10000)
// console.log(user.balance);


// for making the variable private i will place it inside a outer function: so that there is no direct accesible

function createAccount(){
    let balance = 1000;

    return{
        name: "ashish",
        age: 20,
        withdraw: function(x){
            if( x>0 && typeof x==="number" && x<= balance){
                balance-=x;
                console.log(`Withdrawl amount: ${x}`);
                console.log(`Remaining Balance: ${balance}`)
            }
            else{
                console.log(balance);
            }
            },
        deposit: function(amount){
            if(typeof amount ==="number"){
                balance+=amount;
                console.log(`Deposit amount: ${amount}`);
                console.log(`New Balance: ${balance}`);   
            }
        },
        getBalance: function(){
            return balance;
        }

    }
    // return user;
}

const customer = createAccount()
console.log(customer);
customer.withdraw(100);
customer.deposit(200);
console.log(customer.getBalance());
// custormer.depsoit(1000);