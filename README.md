###### tags: `前端設計工程師養成班`
# CD105 Web/APP前端設計工程師養成班(sass)


- sass官網
[sass offical website](http://sass-lang.com/) 

- sass 線上中文手冊 
[線上中文手冊](http://sass.bootcss.com/docs/sass-reference/)

- sass解決中文註解的問題
[中文註解](http://jsnwork.kiiuo.com/archives/1723/sass-scss-compass-susy2-ruby-%E8%A7%A3%E6%B1%BA%E4%B8%AD%E6%96%87%E8%A8%BB%E8%A7%A3%E7%99%BC%E7%94%9F%E9%8C%AF%E8%AA%A4)

- sass  結構
https://github.com/sexfat/sass_structure

- sass github
https://github.com/sexfat/cd105/tree/master

- js 
https://ithelp.ithome.com.tw/users/20065504/ironman/1259?page=1

## 指令

sudo 管理者權限
cd 到下一層目錄
cd.. 回到上一層
ls    mac查詢指令 
dir   win 查詢指令
node -v  node 版本  
sass --version  sass 版本
gulp -v  gulp 版本  
mkdir 建立資料夾
touch 建立檔案

### node 安裝 10.14版本
https://nodejs.org/en/

- `node -v`

# 安裝sass
- `npm install -g sass`

sass --version


# 安裝gulp

- `npm install gulp-cli -g`

以上是 4.0

`npm install gulp@3.9.1 -g`



# 專案建立

專案初始化 package.json
- npm init

專案安裝 gulp
- npm i gulp --dev

- 改版本到3.9.1
` "gulp": "^3.9.1",`

在執行`npm i`



# 建立gulpfile.js


```jsx=
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


// sass 編譯函式
gulp.task('sass', function () {
    return gulp.src('./sass/*.scss') //來源目錄
        .pipe(sass().on('error', sass.logError)) //經由sass 轉譯
        .pipe(gulp.dest('./css')); //目的地目錄
});



gulp.task('default', ['sass'], function () {

    browserSync.init({
        server: {
            //根目錄
            baseDir: "./",
            index: "index.html"
        }
    });

    gulp.watch(["sass/*.scss", "sass/**/*.scss"], ['sass']).on('change', reload);
    gulp.watch("*.html").on('change', reload);
    gulp.watch("js/*.js").on('change', reload);
    gulp.watch("images/*").on('change', reload);
    // gulp.watch("images/*").on('change', reload);
});


gulp.task('css', ['cssUrls']);
```


# 把開發套件載入專案


## 安裝gulp-sas

`npm install gulp-sass`

## 安裝 browserSync

`npm install browser-sync`



執行gulp




## 變數 

```css=
$fontsize : 20px;
$text : '文字';
$color: #fa2302;


.box {
    font-size: $fontsize;
}

.wrapper {

    font-size: $fontsize;
    background-color: $color;

}
```


##  nesting

```css=

$color: #fa2302;

.container_flow {
    .row {
        width: 1200px;

        span {
            display: block;
        }
    }

    #id {
        width: 300px;
    }

    #sidebar {
        width: 300px;
        color: $color;

        .box {
            background-color: rgb(255, 2, 2);
        }

    }
}
```



## @import

css/...
_var.scss
_header.scss


```css
@import "var";
@import "header";
```


## 跳脫字元 #{} 使用在屬性名稱

```css
.#{$classname} {
    font-size: $fontsize;
}
```


## @mixin

- 不傳值


- 傳單值
```css=
@mixin box($bgc) {
    width: 100vw;
    height: 500px;
    background-color:$bgc;
}


.section {
 @include box(rgb(192, 255, 17));
}


.content {
    @include box(#ffee90);
}

footer {
    @include box(#00ddec);
}

.wapper {

    @include box(#82df99);

} 

```


- 傳多值
* 
```css=
@mixin section($areaname,$width, $height, $bgc) {
    .#{$areaname} {
        width: $width;
        height: $height;
        background-color: $bgc;
    }
}


@include section ('areatext' ,80vw, 100vh, #83ffda);

@include section ('wrapper-flow' ,100vw, 400px, #1a5342);
```

## 偽類寫法

```css=
a {
 color: #82df99;
 &:hover {
     color: #1a5342;
 }
}
```


- btn模組
```css=
@mixin btn($btns , $width ,$height , $bgc , $bordercolor,$bordius ,$pad) {
    .#{$btns} {
        width: $width;
        height: $height;
        background-color: $bgc;
        border: 1px solid $bordercolor;
        border-radius: $bordius;
        padding: $pad;
        text-align: center;
        cursor: pointer;
        &:hover {
            background-color: lighten($bgc,10);
        }
    }
}


@include btn('btn-lg' , 80px , 10px , rgb(26, 100, 7)  , #f20 , 10px , 10px);




@include btn('btn-mx' , 60px , 10px , rgb(245, 176, 29)  , rgb(116, 179, 0) , 10px , 10px);
```

# 預設值  null值


```css=
@mixin boxs($width:10px, $height:20px, $color:#f20) {
    width: $width;
    height: $height;
    color: $color;
}

@mixin boxs($width, $height, $color:null) {
    width: $width;
    height: $height;
    color: $color;
}

.box {
    @include boxs();
}
```




```css=
@mixin marginauto($mgtop){
     margin-left: auto;
     margin-right: auto; 
     margin-top: $mgtop;
}


@mixin boxs($width, $height, $color , $top){
    width: $width;
    height: $height;
    color: $color;
    @include section ('areatext', 80vw, 100vh, #83ffda);
    @include marginauto($top);
}

.box {
    @include boxs(100px , 200px ,#83ffda , 30px);
}
```



```css=
.uikit {
    font-size: 20px;
    font-weight: bold;
}

@mixin uikit() {
    font-size: 20px;
    font-weight: bold;
}



.wrapper {
    @extend .uikit;
}

.wrappers {
    @include uikit();
}


```



# 運算

```css=
div {
    width: 10 + 20px;
    height: 30 - 40px;
    font-size: 20px + 10 * 10 ;
    //字體寫法跟css會衝突
    font:  (20px / 2);
}
```


```css=
 span {
            width: ceil(100.78px); //無條件進位
            width: round(100.48px);//四捨五入
            width: floor(100.78px);//無條件捨去
        }
```



```css=
@mixin bodysetting($fontsize) {

    body {
        font-size: $fontsize;

        h1 {
            font-size: round($fontsize * 3.5)
        }

        h2 {
            font-size: round($fontsize * 3)
        }

        h3 {
            font-size: round($fontsize * 2.6)
        }

        h4 {
            font-size: round($fontsize * 2)
        }

        h5 {
            font-size: round($fontsize * 1.5)
        }
    }

}


@include bodysetting(14px);
```



```css=
@for $i from 10 through 100 {
    .dot-#{$i} {
        margin: $i * 1px;
    }
}
```


```css=
@mixin push-top($num) {
    @for $i from 1 through $num {
        .margintop-#{$i} {
            margin-top: $i * 1px;
        }
    }
}


@include push-top(80);
```


# Grid system

```css=
@mixin grid($num) {
    @for $i from 1 through $num {
        .col-md-#{$i} {
            width: ($i / $num) * 100%;
        }
    }
}

@include grid(12);
```

```css=
@mixin grid($num) {
    @for $i from 1 through $num {
        .col-md-#{$i} {
            width: ($i / $num) * 100%;
            @content
        }
    }
}
.wrapper {
    @include grid(12){
        font-size: 10px;
    }

}


.sidebar {
    @include grid(20){
        font-weight: bold;
    }
}
```




# @if 判斷式
```css=

@mixin theme($themecolor) {

    body {
        @if $themecolor == green {
            background-color: green;
            @content;
        }
        @else {
            background-color: #fff;
            @content;
        }
    }
}

@include theme(yellow) {
    .wrapper {
        width: 100%;
        .footer {
            height: 300px;
        }
    }
```

### function
```css=
@mixin rwd($breakpoint) {
    @if $breakpoint==moblie {
        @media only screen and (max-width: $moblie) {
            @content;
        }
    }

    @else if $breakpoint==medium {
        @media all and (min-width: $medium) {
            @content;
        }
    }

    @if $breakpoint==desktop {
        @media all and (min-width: $desktop) {
            @content;
        }
    }
}
```

### 用法
```css=
@include rwd(desktop) {//do something}
```

### 斷點變數
```css=
$moblie: 600px;
$medium: 1024px;
$desktop: 1200px;
```


### @each

```css=
$list : box1 a2 a3 box3 box4; 
@each $pic in $list {
    .img-#{$pic} {
       background: url('images/#{$pic}.jpg') 
    }
}
```


```css=
@mixin img-module($list) {
    @each $pic in $list {
        .img-#{$pic} {
            background: url('./assets/img/#{$pic}.jpg');
            @content;
        }
    }
}


@include img-module(a1 b2){
     width: 300px;
     height: 150px;
};


@include img-module(c1 d2){
    width: 450px;
    height: 300px;
};
```

1. https://www.npmjs.com/package/gulp-sourcemaps

2. 
```jsx=
gulp.task('sass', function () {
    return gulp.src('./sass/*.scss') //來源目錄
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError)) //經由sass 轉譯
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css')); //目的地目錄
});
```

3. 
```jsx=
var sourcemaps = require('gulp-sourcemaps');
```



# Tweenmax 動畫


TweenMax.to('物件', 秒數, 位址);

```jsx=
TweenMax.to('.box_01' , .5 ,{
    x: 100,
    y: 100
})


TweenMax.from('.box_01' , .5 ,{
    x: 100,
    y: 100
})


```



- 補間動畫
https://greensock.com/docs/Easing

- to / from / fromTo

```jsx=
TweenMax.fromTo('.box_01', .5, {
    x: 100,
    opacity: 0
}, {
    x: 300,
    opacity: 1
});
```

- 參數

```jsx=
    scale: 1.5,
    rotation: 360,
    backgroundColor:'#f20',
    repeat: -1,//無限重複
    repeatDelay: 1 
```

- 動畫參考
https://www.pinterest.com/pin/135389532534714005/


- 初始化


```jsx=
TweenMax.set('.box_02',{x: 200, y: 100 ,rotation: 90});
```

- staggerFromTo

```jsx=
TweenMax.staggerFromTo('.box_03', 1 ,{x: 0},{ x: 100 , scale: 1.3}, 0.3);

```

-  js 

```jsx=

var _btn = document.getElementById('btn');
_btn.onclick = function () {
    TweenMax.staggerFromTo('.box_03', 1, {
        x: 0
    }, {
        x: 100,
        ease: Elastic.easeOut
    }, 0.3);
}
```
- html
```htmlmixed=
<div class="text">
            <div class="text-inner">
                <div>我是文字</div>
                <div>我是文字</div>
            </div>
        </div>
```

- scss

```css
 .text {
        width: 300px;
        height: 30px;
        overflow: hidden;
        font-size: 30px;
        // background-color: #fff;
        display: block;
    }
    
```

- js

```jsx=
TweenMax.fromTo('.text-inner', .5, {
    y: -100
}, {
    y: 0
    // ease: Elastic.easeOut
});
```


- 文字模糊

```jsx=
TweenMax.fromTo('.section_01 .text-inner', .5, {
    y: -100,
    textShadow:"0px 0px 50px #000",  
    color:"none"
}, {
    y: 0,
    textShadow:"0px 0px 0px #000"
});
```
- 物件陰影

```jsx=
TweenMax.to('.box_04',1,{
    //物件陰影
    boxShadow: '1px 1px 20px #000' 
})
```

- 延伸

```jsx=
TweenMax.fromTo('.box_04' , 1 ,{
   boxShadow : '2px 2px 40px #333',
},{
    boxShadow : '2px 2px 40px #f20',
    repeat: -1,
    yoyo: true
})
```


- 旋轉中心點
```jsx=
transformOrigin : 'right bottom',
transformPerspective:600,
rotationY: 360,

```


```jsx=
TweenMax.to('.box_05', 1, {
    rotationY: 360,
    transformOrigin:"left 50% -200",
    transformPerspective:600,
    repeat: -1
})
```


# TimelineMax 時間軸

```jsx=
var  tl =  new TimelineMax({
    repeat: -1,
    yoyo: true
});

tl.add(TweenMax.to('.section_02 .box_02' , 1 , {
    y: 100
}))

 tl.add(TweenMax.to('.section_02 .box_01' , 1 , {
    x: 100
}))

tl.add(
   // 動畫
)
```


- callback funtion

```jsx=
 onComplete: function name
```



- 時間控制

```
// tl.play();
// tl.stop();
// tl.timeScale(1);
// tl.pause();
// tl.reverse(0);
```

```
    <script src="node_modules/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>

```


```jsx=
document.getElementById('btn_to').onclick =function (){
  
    TweenMax.to(window, 2, {scrollTo:{y:"#arch"}});
}
```


# Scrollmagic

### 動畫參考
- http://lempens-design.com/

```jsx=
//scrollmagic
//初始化場景
var controller = new ScrollMagic.Controller();

//動畫元件
var an01 = TweenMax.to('.scrollbox' , 1 , {
    x : 100
}) 





//場景
var scene = new ScrollMagic.Scene({
    //觸發點id
    triggerElement: '#aaa',
    // 偏移量
    offset: 140,
    //動畫範圍
    duration: '100%',
    // 動畫反轉
     reverse: true
    .addIndicators({
        name: 'scence 01'
      })
}).setTween(an01)
.addIndicators({
        name: 'scence 01'
      })
.addTo(controller);
```



```jsx=
var animation_02 = new TimelineMax();


animation_02.fromTo('.title', 1, {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0
}).fromTo('.slogan', 1, {
    opacity: 0,
    x: -100
}, {
    opacity: 1,
    x: 0
})




var scene02 = new ScrollMagic.Scene({
    triggerElement: '#bbb',
    offset: 0,
    // duration: '100%'
    // triggerHook: 0.5,
    reverse: false
}).setTween(animation_02)
.addIndicators({
    name: 'scence 02'
})
.addTo(controller);
```


```jsx=
var btns = new TimelineMax();
var btnss = new TimelineMax();

btns.set('.u-btns', {
    rotationX: -90
}).to('.u-btns', 1, {
    rotationX: 0,
    transformOrigin: "center top",
    transformPerspective: 900,
    ease: Power0.easeNone,
})

btnss.set('.btns', {
    rotationX: 0
}).to('.btns', 1, {
    rotationX: 90,
    transformOrigin: "center bottom",
    transformPerspective: 900,
    ease: Power0.easeNone,
})
```


### 動態置入class


```jsx=
var scene03 = new ScrollMagic.Scene({
        triggerElement: '#ccc',
     
        // triggerHook: 0.5,
        // reverse: true
    }).setClassToggle('.setclass' , 'on')
    .addIndicators({
        name: 'scence 03'
    })
    .addTo(controller);
```




```css=
.section_05 {
    background-color: rgb(188, 255, 237);
    overflow: hidden;

    .setbg {
        width: 100%;
        height: 100vh;
        background-image: url(https://placem.at/places);
        background-color: #000;
        background-size: cover;
        transform-origin: center;
        transform: scale(1.2);
        transition: transform 3s ease-out;
        will-change: transform;
        position: relative;
        z-index: 0;
        &.on {
            transform: scale(1);
        }


    }

    .setclass {
        width: 100px;
        height: 100px;
        background-color: rgb(205, 49, 49);
        position: relative;
        z-index: 100;
    }


}
```


```jsx=
 var animation_04 = TweenMax.to('.setclass' , 1 ,{
      x: 300
    })

var scene03 = new ScrollMagic.Scene({
        triggerElement: '#ccc',
     
        // triggerHook: 0.5,
        reverse: false
    }).setClassToggle('.setbg' , 'on')
    .setTween(animation_04)
    .addIndicators({
        name: 'scence 03'
    })
    .addTo(controller);
```

html
```
 <div class="section section_06">
        <div class="pinbox_1 ws"></div>   
        <div class="pinbox_2 ws"></div>   
        <div class="pinbox_3 ws"></div>   

    </div>
```


scss
```css=
.section_06 {
    padding-top: 100px;
    background-color: rgb(245, 255, 181);    

    .ws {
        width: 300px;
        height: 80px;
        background-color: rgb(254, 113, 113);
        margin-bottom: 10px;
    }

    .pinbox_1 {
        background-color: rgb(88, 245, 20);
    }
    .pinbox_2 {
        background-color: rgb(20, 204, 245);
    }
    .pinbox_3 {
        background-color: rgb(128, 81, 130);
    }



}
```




```jsx=
var tlpin = new TimelineMax();


tlpin.to('.pinbox_1', 1, {
    x: 100
}).to('.pinbox_2', 1, {
    x: 200
}).to('.pinbox_3', 1, {
    x: 300
});



var scene03 = new ScrollMagic.Scene({
    triggerElement: '#ddd',
    duration: '300%',
    triggerHook: 0,
    // reverse: true
}).setPin('.section_06')
.setTween(tlpin)
.addIndicators({
    name: 'scence pin 04'
})
.addTo(controller);
```


html 
```htmlmixed=
 <div id="fff"></div>   
    <div class="section section_07">
            <div class="bgsall bgall01"></div>
            <div class="bgsall bgall02"></div>
            <div class="bgsall bgall03"></div>
    </div>
```


css
```
.section_07 {
    overflow: hidden;
    .bgsall {
       width: 100%;
       height: 100%;
       position: absolute;
    }
    .bgall01 {background-color: rgb(0, 204, 177);}
    .bgall02 {background-color: rgb(226, 33, 33);}
    .bgall03 {background-color: rgb(110, 146, 9);}
}
```





```jsx=
var tlimax = new TimelineMax();

tlimax.fromTo('.bgall01', 1, {
    x: "-100%"
}, {
    x: '0%'
}).fromTo('.bgall02', 1, {
    x: "100%"
}, {
    x: '0%'
}).fromTo('.bgall03', 1, {
    y: "-100%"
}, {
    y: '0%'
})



var scene_sce = new ScrollMagic.Scene({
        triggerElement: "#fff",
        duration: '300%',
        //畫面最上緣
        triggerHook: 0,
        //只出現一次
        // reverse: false,
    })
    .setPin('.section_07')
    .setTween(tlimax)
    .addIndicators()
    .addTo(controller);
```


參考範例
http://alfredservice.com/


https://codepen.io/pat_hg/pen/jbQKpQ
https://www.oeufkicetou.fr/