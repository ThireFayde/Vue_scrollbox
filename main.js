var app = new Vue({
    el: '#scroollBox',
    data: {
        scrollY: 0,
        timer: null,

        berHeight: 0,
        boxHeight: 400,
        pageHeight: document.documentElement.scrollHeight || document.body.scrollHeight,
        windowHeight: window.innerHeight,

        styleObject: {
            width: '100%',
            position:'absolute',
            background: '#fff',
            opacity: '0.5',
        }
    },
    created: function(){
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)

        //berの高さをDOM作成時に算出
        this.windowHeight = window.innerHeight;
        this.berHeight = this.windowHeight * this.boxHeight / this.pageHeight;
        this.styleObject['height'] =  this.berHeight +'px';
        
        //berのheightを算出
        this.scrollY =  this.boxHeight * window.scrollY / this.pageHeight;
        this.styleObject['top'] = this.scrollY+'px';
    },
    beforeDestroy: function(){
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleScroll: function(){
            this.scrollY =  this.boxHeight * window.scrollY / this.pageHeight;
            this.styleObject['top'] = this.scrollY+'px';
        },
        handleResize: function(){
            this.windowHeight = window.innerHeight;
            this.berHeight = this.windowHeight * this.boxHeight / this.pageHeight;
            this.styleObject['height'] =  this.berHeight +'px';
        }
    }
});