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