const app = new Vue({
    el: "#app",
    data: {
        hello: "Hello Garrett",
        show: false,
        arr: [1,2,3,4,5,6],
        input: ""
    },
    methods: {
        hideAndSeek: function(){
            this.show = !this.show
        },
        logIt: function(){
            console.log(this.input)
        }
    }
})