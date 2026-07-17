// // First Vue App

// var app = new Vue({            // Option Object
//     el: '#app',                // Element app and element both are not same
//     data: {                    // State of app UI = f(state)
//         message: 'Hello Veu!',
//         height: '150'
//     }
// })

// Veu Directives: these are the programatic functionalities we can use directly in html to perform the programetic behaviour.
// 1. Bind Elements 'v-bind' -- use to assign values to the attribute of an element
//                           -- we can use as v-bind:height="height"
//                           -- or as well  :height="height" -- not need to write v-bind
//                           -- One way data binding

// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//         message: 'You loaded this page' + new Date().toLocaleString(),
//         val: "font-size: 30px;"
//     }
// })

// 2. Conditional rendering 'v-if' {% if %}
// var app3 = new Vue({
//     el: '#app-3',
//     data: {
//         seen: true
//     }
// })

// 3. Loops in vue 'v-for' {% for x in list %}
// var app4 = new Vue({
//     el: '#app-4',
//     data: {
//         number: 3,
//         todos: [
//             { text: 'Learn JavaScript' },
//             { text: 'Learn Vue' },
//             { text: 'Build something awesome' }
//         ]
//     }
// })

// 4. Handling user interection
// 4.1 Handling inputs from user (Two-way data binding) 'v-model'
// var app5 = new Vue({
//     el: '#app-5',
//     data: {
//         message: ''    // Initial State
//     }
// })

// 4.2 Handling user events with 'v-on' and event handlers most use @click / v-on:click=""
// var app6 = new Vue({
//     el: '#app-6',
//     data: {
//         message: ''
//     },
//     methods: {
//         reverseMessage: function() {
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })



// Computed Properties
// var app7 = new Vue({
//     el: '#app-7',
//     data: {
//         message: 'Hello',
//         firstname: 'MAD',
//         lastname: 'course'
//     },
//     computed: {
//         fullname: function() {
//             return this.firstname + " " + this.lastname
//         },
//         reversed: function() {
//             return this.message.split('').reverse().join('')
//         }
//     }
// })

// Watchers
var app8 = new Vue({
    el: '#app-8',
    data: {
        message: '',
        info: 'Cannot proceed until length is 8 !'
    },
    watch: {
        message: function(newvalue,oldvalue) {
            if(newvalue.length>=8) {
                this.info = "Perfect! you can go ahead"
            }
            else {
                this.info = "Not yet 8! add more char"
            }
        }
    }
})



// methods -- page rendered every call -- call with parenthesis like {{ message() }}

// computed -- calculate when variable change
//          -- use for calculation

// watch -- take action when variable change
//       -- use for give any message



