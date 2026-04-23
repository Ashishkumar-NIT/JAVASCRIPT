// //forEach,FILTER,REDUCER,SET , MAP IN JS

// let arr = [10,20,30,40,"ASHISH","CODER ARMY"]

// let user = {
//     name: "ASHISH",
//     age: 20,
//     city: "bangalore"
// }
// // FOR OF LOOP array

// for(let values of arr){
//     console.log(`for of loop Values are: ${values}`);
// }

// // FOR IN LOOP array
// for(let values in arr){
//     console.log(`For in loop Values are:${arr[values]}`);
// }


// // FOR in loop objects
// for(let keys in user){
//     console.log(`For in loop Object values is:${keys}: ${user[keys]}`);
// }

// // FOR of loop objects (cannot use the for of loop directly with objects, why? because for of stores the 
// // values in the variable and Objects are defined as properties in the form of keys and pair,
// // so convert the object into array)
// console.log(`Object in the form of array key: ${Object.keys(user)}`);
// console.log(`Object in the form of array value: ${Object.values(user)}`);
// console.log(`${Object.entries(user)}`);

// for(let [keys, values] of Object.entries(user)){
//     console.log(`${keys}:${values}`);
// }

//--------------------- USING THE ARRAY forEach method----------------------------

// const arr = [10,20,30,40,"Ashish",50,"Coder Army"]

// // const func = (number)=>{
// //     console.log(number);
// // }
// arr.forEach((number)=>{
//     console.log(number);
// })

// const c2 = func()
// console.log(c2(arr.forEach));

//--------------------- USING THE ARRAY filter method----------------------------

// const arr = [10,20,30,40,50];
// const newArr = arr.filter((num)=>num>=20);
// console.log(newArr);

// // user's defined function

// Array.prototype.filtering = function(compare){

//         let newArr = []
//         for(let num of this){

//         if(compare(num)){

//             newArr.push(num)
//         }
//     }
//         return newArr;
// }

// let newArrr = arr.filtering((num)=>num>=20);
// console.log(newArrr);

// let arr2 = [199,299,399,499,599];
// let newArr2 = arr2.filtering((num)=>200);
// console.log(newArr2);


//---------------------------- SET DATASTRUCTURE ------------------------------------
// const s0 =new Set();
// console.log(typeof s0); //set is a type of object

// let arr = [10,10,20,20,30,30,40,40,50,50];
// console.log(arr);

// const s1 = new Set(arr);
// console.log(s1);
// s1.add(60,60);
// console.log(s1);
// console.log(s1.has(20));
// console.log(s1.has(21));
// console.log(s1.delete(60));
// console.log(s1);
// console.log(s1.clear())
// console.log(s1);

// const email = ["ash@123","pash@123","bash@123","bail@123","ash@123","pash@123","bash@123"]
// // console.log(email);

// const nayaEmail =[...new Set(email)];
// console.log(nayaEmail);

//---------------------------- map functions ------------------------------------

const products= [
    // Electronics
    {id:1,name:"Laptop",category:"Electronics",price:1200,instock:true},
    {id:2,name:"Headphone",category:"Electronics",price:200,instock:true},
    {id:3,name:"Smartphone",category:"Electronics",price:800,instock:false},
    {id:4,name:"Monitor",category:"Electronics",price:300,instock:true},
    {id:5,name:"Keyboard",category:"Electronics",price:75,instock:true},
    
    // Books
    {id:6,name:"the habbit",category:"Books",price:35,instock:true},
    {id:7,name:"bailey",category:"Books",price:75,instock:false},
    {id:8,name:"SSB",category:"Books",price:505,instock:true},
    {id:9,name:"economics",category:"Books",price:100,instock:false},
    {id:10,name:"accounts",category:"Books",price:90,instock:true},
    {id:12,name:"business",category:"Books",price:900,instock:true},
]

const newProducts = products.filter((products) => products.price>75).sort((a,b)=>b.id-a.id).map((product)=> ({Bookmname:product.name,BookPrice:product.price}));
console.log(newProducts)

// const ans =products.map((product)=> ({ItemCategory:product.category,itemname:product.name}));
// console.log(ans);