Vue.component("blog", {
    props: ['attr1','attr2'],
    template:  `<div>
                    <h1>{{message}}</h1>
                    <h2>This is subheading!</h2>
                    <h3> {{compMessage}} </h3>
                    <h4><slot></slot></h4>
                    <h4>Count: {{count}}</h4>
                    <h4>Attribute 1: {{ attr1 }}</h4>
                    <h4>Attribute 2: {{ attr2  }}</h4>
                    <button @click="countClick">Add Count</button> <br> <br>
                    <input type="text" v-model="text">
                    <button @click="appendText">Append text</button>
                </div>` ,
    data: function() {        ///// This data property holds the function and function return something.
        return {
            message: "Hello from Component!",
            compMessage: "greetings!",
            count: 0,
            text: ""
        }
    },
    methods: {
        countClick: function() {
            this.count++ ;
            this.$emit("liked")
        },
        appendText: function() {
            this.message = this.message + " " + this.text
            this.text = ""
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello from main Appliction',
        compMessage: "This is from main app.",
        allLikes: 0
    },
    methods: {
        addLike: function() {
            this.allLikes++;
        }
    }
})

