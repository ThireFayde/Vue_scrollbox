var app = new Vue({
    el: '#scroollBox',
    data: {
        scrollY: 0,
        timer: null,

        berHeight: 0,
        boxHeight: 0,
        
        pageHeight: document.documentElement.scrollHeight || document.body.scrollHeight,
        windowHeight: window.innerHeight,

        styleObject: {
            width: '100%',
            position:'absolute',
            background: '#fff',
            opacity: '0.5',
            height: 0,
            top : 0,
        }
    },
    created: function(){
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function(){
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    },
    mounted: function(){
        this.boxHeight = this.$el.scrollHeight;

        //berの高さをDOM作成時に算出
        this.windowHeight = window.innerHeight;
        this.berHeight = this.windowHeight * this.boxHeight / this.pageHeight;
        this.styleObject['height'] =  this.berHeight +'px';

        //berのheightを算出
        this.scrollY =  this.boxHeight * window.scrollY / this.pageHeight;
        this.styleObject['top'] = this.scrollY+'px';
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

var Xscroll = new Vue({
    el:'#XscrollBlock',
    data: {
        scrollX: 0,
        scrollY: 0,
        styleObject: {
            transform: 'translateX(0)',
            top:0,
        }
    },
    created: function(){
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function(){
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleScroll: function(){
            // this.scrollY =  window.scrollY;
            // this.styleObject['top'] = this.scrollY+'px';
            if(window.scrollY<window.innerWidth * 7){
                this.scrollX = window.scrollY * -2 ;
                console.log(window.innerWidth);
            }else{
                this.scrollX = window.innerWidth * -14;
            }
            this.styleObject['transform'] = 'translateX(' + this.scrollX + 'px)';
        }
    }
});