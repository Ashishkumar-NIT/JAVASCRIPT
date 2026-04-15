// Scope / High Order Fucntion / Closure

// types of scope
    // Global scope variable = can be accesed from anywhere in the while: eg: inside funciton/switch/looping statement
    // fucntional scope variable = can be accesed inside that function  block of code.
    // block level scope variable = can be accesed where it is defined: eg: looping / conditional statements


    let a = 70;
    const b = 60;
    var c = 50;
    console.log(a);
    console.log(b);
    console.log(c);

    // accesing the global variable inside a block of code
    if(true){
        let a = 10;
        const b = 20;
        var c = 30;


        console.log(a);
        console.log(b);
        console.log(c);
    }
        console.log(a);
        console.log(b);
        console.log(c);




    // accesing the global variable inside to a fucntion
    let user = ()=>{
        let a = 30;
        const b = 20;
        var c = 10;


        console.log(a)
        console.log(b)
        console.log(c)
    } 
    user();

    console.log(a)
    console.log(b);
    console.log(c);