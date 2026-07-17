// // Direct one line export

// export const c = 3000000000 ;

// // Explicit named exports

// Internal function - NOT exported
// function sq(x) {
//     return x*x ;
// }

// // // Method 1
// export const c = 199299392;
// export function energy(m) {
//     return m * sq(c);
// }

// Method2
// const speedoflight = 299792458;
// function e(m) {
//     return m * sq(speedoflight)
// }
// export {
//     speedoflight as c,
//     e as energy
// };

// // Default export
// const c = 4;
// export default function (m) {
//     return m * c * c;
// }

// // Read only variable imports!
// export let x = 0 ;
// export function incx() {
//     x++ ;
// }