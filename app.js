const app = new Vue({
    el: "#app",
    data: {
        hello: "Hello Garrett",
        show: false,
    },
    methods: {
        hideAndSeek: function(){
            this.show = !this.show
        }
    }
})