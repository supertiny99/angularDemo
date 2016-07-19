var gulp = require('gulp'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  htmlmin = require('gulp-htmlmin'),
  babel = require('gulp-babel');

gulp.task('Convertjs', function() {
  gulp.src('src/**/*.js')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});
gulp.task('Htmlmin', function() {
  var options = {
    removeComments: false, //清除注释
    collapseWhitespace: false, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttribute: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: false, //压缩页面JS
    minifyCSS: false //压缩页面CSS
  };
  gulp.src('src/**/*.html')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/'));
});

gulp.task('convertjsWatch', function() {
  gulp.watch('src/**/*.js', ['Convertjs']);
});
gulp.task('htmlWatch', function() {
  gulp.watch('src/**/*.html', ['Htmlmin']);
})

gulp.task('default', ['convertjsWatch', 'htmlWatch']);