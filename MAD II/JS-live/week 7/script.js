const store = new Vuex.Store({
    state: {               //// This is same as Data
        count: 0
    },
    mutations: {                   // handle synchronous part
        increment(state) {        // to access pass as an argument here.
            state.count++        // kuch change karna ho to do mutation
        },
        decrement(state){
            state.count--
        } 
    },                         
    actions: {                   // handle Asynchronous part
        incrementAsync(context) {  // context store infrmation of commit
            setTimeout (()=> {  // tell us this is Asyncronous
                context.commit('increment')    // commit take all the mutations in form of string
            },1000)
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        },
        tripleCount(state) {
            return state.count * 3
        }        
    }

})

Vue.component('likesandshares',{
    template: `
        <div>
            <h3>Likes Component</h3>
            <h2>Likes: {{ likes }} </h2>
            <h2>Shares: {{ shares }} </h2>
            <button @click="decrementCount">Decrement</button>

        </div>`,
        data() {
            return {
                shares: 10
            }
        },
        methods: {
            decrementCount() {
                this.$store.commit('decrement')
            }
        },
    computed: {
        likes() {
            return this.$store.state.count
        }
    }
})


const app = new Vue({
    el: "#app",
    store,              //Link Store to an app
    // data:{
    //     count: 0
    // },
    // methods:{

    // },
    // computed:{
    //     doubleCount() {
    //         return this.count * 2
    //     }
    // },
    methods: {
        incrementCount() {
            return this.$store.commit('increment')
        },          // Commit a mutation dispatch a action
        incrementCountAsync() {
            return this.$store.dispatch('incrementAsync')
        }
    },
    computed: {
        computedCount() {
            return this.$store.state.count
        },
        doubleCount() {
            return this.$store.getters.doubleCount
        },
        tripleCount() {
            return this.$store.getters.tripleCount
        }
    }
})