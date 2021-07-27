Vue.component('hellogarrett', {
    template: `<div>
    <h1>{{hello}} {{cheese}} {{age}} {{doubleAge}}</h1> 
    <input text="number" v-model="age"/></div>`,
    props: ['cheese'],
    data: function(){
        return {
            hello: "Hello",
            age: 31
        }
    },
    methods: {},
    computed: {
        doubleAge: function(){
            return this.age * 2
        }
    }
})

const app = new Vue({
    el: "#app",
})