Vue.component('hellogarrett', {
    template: "<h1>{{cheese}}</h1>",
    props: ['cheese']
})

const app = new Vue({
    el: "#app",
})