const gulp = require('gulp')
const plumber = require('gulp-plumber')
const browserify = require('gulp-browserify')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const pug = require('gulp-pug')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

gulp.task('js', function(){
  return gulp.src('src/js/*.js', { read: false })
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2017']
    }))
    .pipe(browserify())
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('css', function(){
  return gulp.src('src/stylus/*.styl')
    .pipe(plumber())
    .pipe(stylus({errors: true, 'include css': true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('html', function(){
  return gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/js/*/*.js', ['js'])
  gulp.watch('src/pug/*.pug', ['html'])
  gulp.watch('src/stylus/*.styl', ['css'])
})

gulp.task('default', ['js', 'watch', 'css', 'html'])