new Vue({
    el: '#app',
    data: {
        name: "Jhone Doe",
        notes: []
    },
    methods: {
        fetchNotes: function () {
            fetch("http://127.0.0.1:5000/api/data")
                .then((response) => response.json())
                .then((data) => {
                    this.notes = data;
                    console.log("Fetched notes:", this.notes);
                })
            }      
    },
    mounted: function () {
        this.fetchNotes()
    }
 
})