Hoisting => it is a concpet of JS which is used in Function that means, we can call the function before it is initialized;

// 3. Arrow function:
//  syntax: const variable_name = ()=> {
// }

// normal arrow syntax
const square = (n)=> {
    return n*n;
};

// arrow function when only single item is returned
const square1 = (n)=> n*n;;

// arrow fucntion when onyl single item is returned and single parameter is passed.
const square2 = n=> n*n;;
console.log(square(10));
console.log(square1(11));
console.log(square2(12));

<!-- Arrow fucntions with objects -->
<!-- Callback & callback hell -->