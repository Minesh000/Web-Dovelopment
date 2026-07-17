console.log("Logged from external Script");
// alert("You just ran JavaScript!");
// document.body.style.backgroundColor = "lightblue";


// let x = 0 ;
// const AnotherVariable = 42; 
// var we_dont_use_var = true ;
// console.log(x)
// let x = 0 ;


/////// Why not to use var ?
// var x1 = 10;
// {
//     console.log(x1)
//     var x2 = 30;
// }
// console.log(x2)

// let x1 = 10;
// {
//     console.log(x1)
//     let x2 = 30;
// }
// console.log(x2)

// const x1 = 10;
// {
//     console.log(x1)
//     const x2 = 30;
// }
// console.log(x2)

////////// Strings
// let s = "Hello";
// console.log(s);
// console.log(s.length);
// console.log(s[1]);
// console.log(s.substring(2,4));

////////// Templates
// let s = "Hello";
// let st = `${s} World`;
// console.log(st)
// console.log(`Length of ${st} = ${st.length}`)

//////// Operators and coercion
// console.log(3 + 4);
// console.log('3'+'4')
// console.log('3'+ 4)
// console.log(3 +'4')
// console.log('3'*'4')

///////// Loose and Strict equality
// console.log(2==4)
// console.log(3==3)
// console.log('3'== 3)
// //////// Strict equality
// console.log('3'=== 3)
// console.log(undefined == null)
// console.log(undefined === null)

/////// Conditions
// let x = 3;
// if (x == 5){
//     console.log("What");
// }else{console.log("Of course 3 != 5");
// }

/////// Iteration
// for (let x=0; x<5; x++){
//     console.log(x)
// }

/////// Iteration in vs of
// const v = [1,2,3,4];
// for (const x in v){
//     console.log(x)
// }
// for (const x in v){
//     console.log(v[x])
// }
// for (const x of v){
//     console.log(x)
// }

/////// Functions

//// Basic Function
// function add(x, y){
//     return x + y ;
// }
// console.log(typeof(add))
// console.log(add(2, 3))
// add.v = {'a':3 , 'b':2};
// console.log(add.v)
// console.log(add.v.a)
// console.log(add.x)

//// Arrow Function
// let add1 = (x,y) => (x+y);

//// Anonymous Function
// console.log(function(x,y){return x + y ;}(2,3));

//// Assigning to variables
// let add2 = function(x,y){return x+y ; };
// console.log(typeof(add))
// console.log(typeof(add1))
// console.log(typeof(add2))