var app = new Vue({
    el: '#app',
    data: {
        mytasks: [],
        // mytasks: ['Task 1','Task 2','Task 3'],
        task: "",
        info: "Enter a task with length more then 7 characters.",
        danger: false,
        green: false,
        button: "btn btn-primary"
    },
    methods: {
        addTask: function () {
            let thisTask = {}
            thisTask.id = this.mytasks.length + 1
            thisTask.name = this.task 
            thisTask.isCompleted = false
            this.mytasks.push(thisTask)
            this.task = ""
        },
        markComplete: function(id) {
            let thisTask = this.mytasks.find((task) => task.id == id)
            thisTask.isCompleted = true
        }
    },
    computed: {
        completedTasks: function() {
            let cTasks = this.mytasks.filter((task) => task.isCompleted == true )
            return cTasks.length
        },
        // pendingTasks: function() {
        //     let pTasks = this.mytasks.filter((task) => task.isCompleted == false)
        //     return pTasks.length
        //     },
        pendingTasks: function() {
            return this.mytasks.length - this.completedTasks
        }
    },
    watch: {
        task: function(newVal, oldVal) {
            if (newVal.length < 8){
                this.info = "length is still less than 7 ,add more details! "
                this.danger = true
                this.green = false
            }
            else{
                this.info = "Good to go, Click on add!"
                this.danger = false;
                this.green = true;
            }
        }
    }
    
    
    
})