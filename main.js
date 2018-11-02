var app = new Vue({
    el: '#scroollBox',
    data: {
    },
    created: function(){
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
    }
});