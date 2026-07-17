// Things that take time: Asynchronous

// - API requests
// - File reading
// - Database queries 
// - Timers 
// - Network requests

// JavaScript handles this using asynchronous programming.


// console.log("Start")

// setTimeout(function(){
//     console.log("Data recieved")
// },2000)

// console.log("End")


// function fetchData(callback) {
//     callback("Data Outside")  //callback access myLog, callback = myLog
//     setTimeout(function(){
//         callback("Data loaded")
//     }, 2000)
// }
// const myLog = function(result) {
//     console.log(result)
// }
// // myLog("dummy")
// fetchData(myLog)

// // Nested Functions
// getUser(function(user){
//     getOrders(user.id, function(orders){
//         getOrderDetails(orders[0],function(details){
//             console.log(details);
//         })
//     })
// })


// Callback hell - pyramid of doom
// - Deep nesting
// - Hard to read
// - Hard to debug
// - Error handling becomes messy

// Promise

// A Promise is an object that represents the future result of an asynchronous operation.

// | State      | Meaning
// | --------   | ------------------------
// | Pending    | Work not finished
// | Filfilled  | Work compeleted successfilly
// | Rejected   | Work failed

// Promise = basic example

// let myPromise = new Promise(function(resolve, reject){
//     let success = false
//     if (success){
//         resolve("Task compeleted")
//     } else {
//         reject("Task failed")
//     }
// })
// console.log(myPromise)

// // Print something from promise
// myPromise
//     .then(function(result) {console.log(result)})
//     // .catch(function(result) {console.error(result)})   // for show an error
//     .catch(function(result) {console.log(result)})  // for printing

// function fetchUser(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve({name:"Adarsh", id:101})
//         }, 2000)
//     })
// }
// console.log("start")
// // console.log(fetchUser())
// fetchUser()
//     .then(function(user){console.log("User:", user.name)})
//     .catch(function(error){console.log("Task Failed")})
// console.log("end")

// fetch is automatically handle the promise
// fetch(http://localhost:5000/users) - API request


// Promise Chaining

// function step1() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 1 done"), 1000)
//     })
// }
// function step2() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 2 done"), 1000)
//     })
// }

// step1()
// .then(function(result){
//     console.log(result)
//     return step2()
// })
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })

// quiz 1 me kam 
// quiz 2 me jyada
// The rturn of first then is handle by consecutive thens.
//if any of the promise break, it will be handle by the catch block.


// Promise chaning
// Example 1

// function loginUser(username, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Logging in user...")

//             if (username === "admin" && password === "1234") {
//                 resolve({userId: 101 });
//             } else {
//                 reject("Invalid credentials")
//             }
//         }, 1000)
//     })
// }

// function fetchUserProfile(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Fetching user profile...")
//             resolve({userId: userId, name: "Adarsh", role: "admin"})
//         }, 1000)
//     })
// }

// function fetchPermissions(role) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Fetching permissions...")
//             if (role === 'admin') {
//                 resolve(["read", "write","delete"])
//             } else {
//                 resolve(["read"])
//             }
//         }, 1000)
//     })
// }

// loginUser("admin", "1234")
//     .then((user) => {
//         return fetchUserProfile(user.userId)
//     })
//     .then((profile) => {
//         return fetchPermissions(profile.role)
//     })
//     .then((permissions) => {
//         console.log("Permissions", permissions)
//     })
//     .catch((error) => {
//         console.error("Error:", error)
//     })
//     .finally(() => {
//         console.log("Authontication flow completed")
//     })


// Example 2

// Promise.resolve("Task Completed")

// let myProm = new Promise((resolve) => {
//     resolve("Start")
// })

// Promise.resolve("Start")
//     .then((msg) => {
//         console.log(msg)
//         return "Step 1"
//     })
//     .then((msg) => {
//         console.log(msg)
//         throw new Error("Something Broke")
//     })
//     .then((msg) => {
//         console.log(msg)
//     })
//     .catch((err) => {
//         console.log("Caught:". err.message)
//     })
//     .finally(() => {
//         console.log("Finally Executed")
//     })



// // Async, await - Async/await allows writing asynchronous code that lool like synchronous code.

// async - function returns a promise
// await - wait for promise to finish
//       -ye then aur catch ak work ek sath akrta hai

// function step1() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 1 done"), 1000)
//     })
// }
// function step2() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 2 done"), 1000)
//     })
// }

// async function runTask() {
//     let result = await step1()
//     console.log(result)
// }

// runTask()

// // async/await -- Version of Chaining
// async function runProcess() {
//     let r1 = await step1()
//     console.log(r1)

//     let r2 = await step2(r1)
//     console.log(r2)
// }
// runProcess()

// Error Handling with async/await   
// async function run() {
//     try{
//         let user = await fetchUser()
//         console.log(user)
//     } catch(error) {
//         console.error(error)
        
//     }
// }
// run()

// Comparing all three

// Callback
// function(a){
//      function(b){
//          function(c)
//              ...

// Promise
// .then()
// .then()
// .then()

// async/await

// async func1() {
//     await step1()
//     await step2()
//     await step3()
// }
