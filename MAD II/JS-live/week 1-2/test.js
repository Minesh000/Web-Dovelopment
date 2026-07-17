// const obj = {color:'red',
//   changecolor:function(color){ this.color=color}}

// obj.changecolor('Yellow')
// console.log(obj.color)

// const sqr = x => x**2 ;
// console.log(sqr(2))

// const sum = (x,y) => {return x+y}
// console.log(sum(2,3))

// const obj = {      //// this. not working in arrow function use obj.
//   name : 'rohit', //// it is not changing anything
//   changeName : (name) => {
//     obj.name = name
//   }
// }
// obj.changeName('mohit')
// console.log(obj.name)

// const obj = {
//   name: 'Rohit',
//   arrowFunction : null,
//   normalFunction: function (){
//     this.arrowFunction = () => {
//       console.log(this.name)
//     }
//   }
// }
// // obj.arrowFunction()
// obj.normalFunction()
// obj.arrowFunction()

// let startNamePrinter = (name) => {
//     let x = name.split('').reverse()

//     let handler = setInterval(() => {
//         let y = x.pop()
//         console.log(y)
//     }, 1000)

//     setTimeout(() => {
//         clearInterval(handler)
//     }, (name.length + 1) * 1000)
// }

// startNamePrinter('orange')

// let x ={};
// console.log(x.value)

// let x = [1,2,3,4,5]
// console.log(Object.keys(x))
// console.log(Object.values(x))
// console.log(Object.entries(x))
// // x.length = 9
// console.log(x.length)

// a = [1,2,3];
// [b,c]=a ;
// console.log(c)

// a = [1,2,3];
// b,c=a ;
// console.log(c)

// a = [1,2,3];
// [b,...c]=a ;
// console.log(c)

// x = new Array(5);
// x[0]=1 ;
// x[1]=2 ;
// y = [] ;
// for (i in x) {
//     y.push(i)
// }
// console.log(y.length)

// x = [1, 2, 2, 4, 5, -2, -7, -9]
// console.log(x.sort((a, b) => b-a))

// for (const i in [1,2,3]){
//     console.log(i)
// }
// for (const i =1;i<=4;i++){
//     console.log(i)
// }

// let a = [1,2,3]
// let b = [2,2,...a,5]
// let c = b.find(x => x%2)
// console.log(c)

// let a = {first_name: "abhi"}
// let {first_name: alt} = a
// console.log(a.first_name)

// arr = ['iitmonline',true,3, (a,b) => a + b ]
// let result = Array()
// for (let i=0;i<arr.length;i++){
//     result.push(typeof(arr[i]))
// }
// console.log(result)

// var x = 5
// let obj = {
//     'x':10,
//     func : (x) => {
//         this.x = x
//     }
// } 
// obj.func(20)
// console.log(x, "and", obj.x  )



const globalVar = 50;

const object1 = {
    globalVar: 100,
    method1: function() {
        console.log(globalVar, this.globalVar);
        return () => {
            console.log(globalVar, this.globalVar);
        }
    }
}

const object2 = {
    globalVar: 200,
    method2: () => {
        console.log(globalVar, this.globalVar);
        return function() {
            console.log(globalVar, this.globalVar);
        }
    }
}

// 1. Regular Function (Object Context) -> Output: 50 100
// 2. Returned Arrow Function (Remembers Object Context) -> Output: 50 100
const fn1 = object1.method1();
fn1()


// 3. Arrow Function (Global Context) -> Output: 50 undefined
// 4. Returned Regular Function called directly (Global Context) -> Output: 50 undefined
const fn2 = object2.method2();
fn2();