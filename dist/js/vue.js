var app = new Vue({
    el: '#app',
    data: {
        isOpen: false,
        },
        
    methods:{
        togNav: function() {

             this.isOpen = !this.isOpen;
            
        }
    }
})