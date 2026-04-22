//forEach,FILTER,REDUCER,SET , MAP IN JS

let arr = [10,20,30,40,"ASHISH","CODER ARMY"]

let user = {
    name: "ASHISH",
    age: 20,
    city: "bangalore"
}
// FOR OF LOOP array

for(let values of arr){
    console.log(`for of loop Values are: ${values}`);
}

// FOR IN LOOP array
for(let values in arr){
    console.log(`For in loop Values are:${arr[values]}`);
}


// FOR in loop objects
for(let keys in user){
    console.log(`For in loop Object values is:${keys}: ${user[keys]}`);
}

// FOR of loop objects (cannot use the for of loop directly with objects, why? because for of stores the 
// values in the variable and Objects are defined as properties in the form of keys and pair,
// so convert the object into array)
console.log(`Object in the form of array key: ${Object.keys(user)}`);
console.log(`Object in the form of array value: ${Object.values(user)}`);
console.log(`${Object.entries(user)}`);

for(let [keys, values] of Object.entries(user)){
    console.log(`${keys}:${values}`);
}