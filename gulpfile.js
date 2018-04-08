var gulp = require ("gulp");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell');

gulp.task('webpack', function(){
  return gulp.src('*.js', {read: false})
  .pipe(shell([
    'webpack'
  ]))
  .pipe(browserSync.stream())
})

//Compiles SCSS into CSS & applies all auto-prefixers
gulp.task('sass', function () {
return gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
            browsers: ['last 2 versions']
          }))

  .pipe(gulp.dest('./public/css'))
  .pipe(browserSync.stream());
});

//Open new broswer when changes are made--FOR EASY TESTING
gulp.task('browser-sync', function(){
  browserSync.init({
    server: './public',
    notify: false,
    open: true
  })
})

gulp.task('sass:minify', function () {
return gulp.src('./public/css/*.css')
.pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/css'));
});


//Automatically runs Sass function when any changes made to files in ./src/scss folders
gulp.task('default', ['sass', 'webpack', 'browser-sync'],
 function(){
  gulp.watch('./src/scss/**/*', ['sass']);
  gulp.watch('./src/js/**/*', ['webpack']);

})

gulp.task('production', ['sass:minify'])




// gulp.task('sass:watch', function () {
// gulp.watch('./sass/**/*.scss', ['sass']);
// });

// gulp.task('printName', function(){
//
//   console.log('My name is not Joe');
// })
//
// gulp.task('printAge', function(){
//
//   console.log('I am 30 years old');
// })
