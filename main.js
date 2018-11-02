var app = new Vue({
    el: '#scroollBox',
    data: {
        scrollY: 0,
        timer: null,
        styleObject: {
            width: '100%',
            position:'absolute',
            background: '#fff',
            opacity: '0.5',
            height: '100px',
        }
    },
    created: function(){
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll: function(){
            this.scrollY = window.scrollY;
            this.styleObject['top'] = this.scrollY+'px';
        }
    }
});