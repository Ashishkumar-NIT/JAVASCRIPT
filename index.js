// console.log(Math.floor(Math.random()*10)+15);
// console.log(Math.floor(Math.random()*10)+10);

// b-w 105-110
// console.log(Math.floor(Math.random()*6)+105);

// OTP GENERATE: 1000-9999
// let min = 1000;
// let max = 9999;
// console.log(Math.floor(Math.random()*(max-min+1)+min));

// function random_generator() {
//     let min = 1000;
//     let max = 9999;
//     console.log(Math.floor(Math.random()*(max-min+1)+min));
// };


// random_generator() 

// const user = {
//     name: "ashish",
//     age: 20,
//     emailID: "ashishkumar@gmail.com",
//     amount: 3400,
//     "home address": "bangalore"
// }

// console.log(user["home address"]);
// console.log(user.home address); variable names with spacing will throw error, but with " " will not

// DAY 8 (OBJECTS)
// console.log(user.amount);
// console.log(user["amount"]);

// stores data in a structural manner
// console.log(typeof (user));

// CRUD Operations in Objects Create / Read / Update / Delete
//  update
// user["age"] = 21;
// console.log(user);
// user.age = 22;
// console.log(user);

// user["aadhar"] = 123456789012;
// console.log(user);

// // delete operation
// delete user["aadhar"];
// console.log(user);

// delete user.emailID;
// console.log(user);


// ARRAY
// let arr1 = ["name", "ashish", "age", "20", "college", "jainuniversity"];
// console.log(arr1["name"]);
// cration of objects

// const user = {
//     name: "aditya",
//     age: 23,
//     amount: 340000,
//     city: "bangalore"
// }

// console.log(user);

// const user2 = user; // it will not create a copy of user, it will just create a reference to user | copy by refernce
// console.log(user2);
// how can i access keys of an object
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.values(user2));
// console.log(Object.entries(user));

// looping in objects
// for (let keys in user) {
//     console.log(keys, ":", user[keys]);
// }


// // destructuring of objects
// const user = {
//     name: "aditya",
//     age: 23,
//     amount: 340000,
//     city: "bangalore"
// }

// console.log(user);

// const { name: userName, age: userAge, city: userCity } = user;
// console.log(userName, userAge, userCity);

// // destructuring of arrays
// const arr = [10, 20, 30, 40, 50];
// console.log(arr);

// const [a, b, c, d] = arr;
// console.log(a, b, c, d);

// rest operator 
// const [, , ...anything] = arr
// console.log(anything);
// // spread operator
// const arr2 = [...arr];
// console.log(arr2);

// why to use for of loop for Arrays
// const arr4 = [10, 20, 40, 60];

// // spread operator
// const newArr1 = [...arr4];  //creates a new array | separate memory
// console.log(newArr1);

// const newArr2 = arr4 //capy by reference | point to the same array | shared memory
// console.log(newArr2);


// destructuring of objects
// const user = {
//     name: "aditya",
//     age: 23,
//     amount: 340000,
 
//     city: "bangalore"
// }
// console.log(user);
// user.gmail = "ash@123";
// console.log(user.gmail);
// // important.
// accessing only keys from the objects
// console.log(Object.keys(user));
// // accesing only valuse form the object
// console.log(Object.values(user));
// // accesing the property from the user object
// console.log(Object.entries(user));


// const user = {
//     name: "aditya",
//     age: 23,
//     amount: 340000,
//     city: "bangalore"
// }

// // if we have to store the object valuse in a variable, follow destructuring of objects
// const { name: userName, age: userAge, city: userCity } = user;
// console.log(userName, userAge, userCity);

// destructuring of array
// const arr = [10, 20, 30, 40, 50];
// const [first,second] = arr;
// console.log(first,second);

// const [, ...rest] = arr;
// console.log(rest);

// for of loop return the values of the array
// for(let values of arr)
// {
//     console.log(values);
// }
// // for in loop return the index of the array 
// for(let values in arr)
//     {
//         console.log(values,arr[values]);
//     }
    
// looping in objects

// const user = {
//     name: "aditya",
//     age: 23,
//     amount: 340000,
//     city: "bangalore"
// }

// for in loop return the keys of the object
// for(let keys in user){
//     console.log(user[keys]);
// }
// for of loop | we cannot use for of loop in objects directly
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// for of loop works on arrays only | convert the object to array using Object.values()
// for(let [keys, values] of Object.entries(user)){
//     console.log(keys,values);
// }

// function in objects

// const user = {
//     name: "aditya",
//     age: 23,
//     amount: 340000,
//     city: "bangalore",
//     reportCard: function(){
//         console.log(`${this.name} has scored 81% in the exam`);
    
//     }
// }
// user.reportCard();

// this keyword in objects | this keyword is used to refer to the current object
// const user2 = {
//     name: "ashish",
//     age: 20,
//     amount: 340000,
//     city: "bangalore"
// }

// user2.reportCard = user.reportCard; 
// user2.reportCard();

// nested objects
// const user2 = {
//     name: "ashish",
//     age: 20,
//     amount: 340000,
//     city: "bangalore",
//     marks: {
//         eng: 71,
//         maths: 80,
//         eco: 20
//     }
// }

// reading nested object values
// console.log(user2.marks.eng);


// ...spread operator
const user = {
    name: "ashish",
    age: 20,
    amount: 340000,
    city: "bangalore",
    marks: {
        eng: 71,
        maths: 80,
        eco: 20
    }
}
// spred operator {...object_name}/shallow copy changes are reflected in layer2/nested objects but
//  in deep copy/structuredClone(object_name)  changes are not reflected in nested onjects too.
const user2 = structuredClone(user);
user2.marks.eng = 100;
console.log(user2);
// console.log(user);
// const user2 = {...user};
// user2.name = "Aditya";
// console.log(user2);
// const user3 = user2;
// console.log(user3);
// user3.marks.eng = 40;
// console.log(user3,user2);

// const user4 = {...user2};
// // console.log(user4);
// user4.marks.maths = 100;
// user4.amount = 2000;
// console.log(user4);
// console.log(user2);