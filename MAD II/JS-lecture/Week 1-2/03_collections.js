// // Basic Array declaretion - mixed mode

// let x = [1, 2, 3];
// console.log(`${typeof(x)} : ${x} with length = ${x.length}`);
// console.log(x[0])


// Mixed element types
// let y = [1, 'b', a => a + 1];
// console.log(`${typeof(y)} : ${y} with length = ${y.length}`);
// console.log(x.length, y.length);

// // Deleting
// x = [];
// console.log(`${typeof(x)} : ${x} with length = ${x.length}`);

// // holes
// y.length = 10;
// console.log(`${typeof(y)} : ${y} with length = ${y.length}`);


// // Iteration
// let x = [1, 'b', a => a + 1];
// x.length = 5;
// for (let i=0; i<x.length; i++){
//     console.log(`x : ${x[i]} type of ${typeof(x[i])}`)
// }

// // 'in' iteration - skips undefined entries 
// for (const i in x){
//     console.log(`x : ${x[i]} type of ${typeof(x[i])}`)
// }

// // 'of' iteration - not skips undefined
// for (const i of x){
//     console.log(`x : ${i} type of ${typeof(i)}`)
// }

// Are objects iterable
// let x = {'a': 1, 'b': 'alpha', 'c': [3, 2, 1]};
// for (const i in x) {
//     console.log(i)
// }

//gives error
// for (const i of x) {
//     console.log(i)
// }

// for (const [k, v] of Object.entries(x)) {
//     console.log(k, v)
// // }

// Creating arrays from holes
// let x = new Array(5);
// x[1] = 10;
// x[3] = 'hello';
// for ( const [k, v] of x. entries() ) {
//     console.log(`Index ${k}, value : ${v} of type ${typeof(v)}`)
// }

// for ( const i in x ) {
//     console.log(`Index ${i}, value : ${x[i]} of type ${typeof(x[i])}`);
// }

// // Spreading
// let x = [1, 2, 3]
// let y = [0, ...x, 4]
// console.log(x)
// console.log(y)

// // Iteration and transformation
// let x = [1, -2, 3, -4, 5, 6, -7, 8];
// let y = x.find (t => t < 0);
// console.log(x)
// console.log(y)

// let y = x.pop ();
// console.log(y)

// console.log(x.filter(x => x < 0))

// console.log(x.map(i => i > 0 ? '+' : '-'))

// x = [1, 2, 3, 4]
// console.log(x.reduce((a, i) => a+i, 0 ));
// console.log(x.reduce((a, i) => a*i, 1 ));

// console.log(x.sort());
// console.log(x.sort((a, b) => a-b))   // +ve Swap element
                                     // -ve No Swap

// // Destructuring
// let x = [1, 2, 3];
// let [a, b] = x;
// let [a, ...b] = x;
// console.log(a)
// console.log(b)

// // Object destructuring
// const person = {
//     firstname : 'Albert',
//     lastname : 'Pinto',
//     age : 25,
//     city : 'Mumbai'
// };

// const {firstname : fn, city : c} = person;
// console.log(person)
// console.log(fn)
// console.log(c)
// const {lastname, age} = person;
// console.log(lastname)
// console.log(age)

// const { firstname, ...rem} = person;
// console.log(firstname)
// console.log(rem)