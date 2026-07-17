
// Comment in JS - This is a single line comment
// Comment

/*
    This is
    a
    multiline 
    comment
*/

// JS code structure
// console.log("Hello");
// console.log("World");

// console.log("Hello")
// console.log("World")

// console.log("Hello"); console.log("World")

// console.log(1 + 2 + 3)
// console.log("1 + 2 + 3")

// // Declaring a variable
// let message;
// // let _hello;
// // let _hello5;
// // let 5hello;  // not correct

// message = "hello";   //assignment of a variable 
// console.log(message)

// // let age = 25.5;
// let MESSAGE = "HELLO"

// console.log(age)
// console.log(MESSAGE)

//  let isMale = true ;   // Compound small letter - camelCase
// console.log(isMale)

// isMale = "yes" ;    // re-assignment
// console.log(isMale)

// let isMale = false ;   // already declared
// console.log(isMale)

// Datatypes
// Primitive datatypes -

// Number - integers and floating value. _______N + 10, N + 20n , N, 2^53n
// BigInt - Numerical values that can not be store as Numbers
// Srtings - Characters enclosed in quotes " ". '123', "hello"
// Boolean - Logical type - true, false, --> JSON

// null - refers to empty object
// let value = null; // None in python
// // console.log(value)

// // undefine - refers to variable whose value is not assigned
// let val;
// // console.log(val)
// let val2 = undefined;
// // console.log(val2)

// non premitive
// Objects - explained below


// Other ways of declaring a varibles
// let message = "hello";
// message = "world";
// console.log(message)

// const pi = 3.14;
// console.log(pi)

// What const enfoece ? -- initializing with declaration
// const pi ;
// pi = 3.14;         // Give an error 
// console.log(pi)

// const pi = 3.14;  // reassignment not allowed
// pi = 4.14
// console.log(pi)

// 1995 - one way of declaring of variable var
// var message = "hello from var"
// console.log(message)

// message = "changed message from var"
// console.log(message)

// Scoping in JS - block level scoping , function scoping
// const and let have block level scoping

// let val1 = 20;

// {
//     console.log(val1);
//     let val2 = 30;
//     console.log(val2)
// }

// console.log(val2)

// var does not have block level scoping

// var varaible1 = 20;

// {
//     console.log(varaible1);
//     var variable2 = 30;
//     console.log(variable2)
// }

// console.log(variable2)

// block scope - dingle block, conditional statement, loops

// simple block
// {
//     let abc = 123;
//     const pqr = 456;
//     val3 = 290;
// }

// // conditional block
// if (cond) {
//     let abc = 123;
//     const pqr = 456; 
// } else {
//     val3 = 290;
// }

// // loops
// for (;;) {
//     let abc = 123;
//     const pqr = 456; 
// }


///// Comparisions

// console.log("21"== 21);
// console.log(Number("21")==21);
// console.log(Number("21n"));
// console.log(21 == 21);

// console.log(21 === 21);
// console.log("21"=== 21);

// console.log("zq" < "aqa")      // lexicografical comparision
// console.log("aq" < "aqa")      // lexicografical comparision

// console.log(null == undefined)
// console.log(null === undefined)  // Strict equality not alloq to type convers ion

// "abc", 35, true, 12.67, 1 // ---> truthy
// false, undefined, null, 0, "", NaN  // ---> falsy

// if (true) {
//     console.log("truthy");
// }

// if (null) {            //// not executable
//     console.log("falsy");
// }



// Functions

//conventional expression - named functions
// function add(a, b) {
//     return a + b ;
// }
// console.log(add(2, 4))

//function expression - unnamed functoin
// const mySum = function(a, b){
//     return a + b ;
// }
// let sum = mySum(4, 6);
// console.log(sum)

// arrow function
// const product = (a, b) => a*b ;   //callback
// console.log(product(4, 2))

// const square = (a, b) => {
//     let asqr = a**2
//     let bsqr = b**2
//     return asqr + bsqr
// }
// console.log(square(2,4))
// console.log()

