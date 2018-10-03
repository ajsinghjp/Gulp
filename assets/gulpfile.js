/* variable Definition */
var   gulp = require('gulp');
var   sass = require('gulp-sass');
var   uglify = require('gulp-uglify');
var   concatJs = require('gulp-concat');
var   browserSync = require('browser-sync').create();

/* Task */
gulp.task('welcome-message', function(){
    // do something
    return console.log('Welocme to gulp task runner.');
});

gulp.task('copy-files', function(){
    // do something
    return gulp.src('src/css/*.css')
           .pipe(gulp.dest('dist/css'));
});

/* Compile Sass files to styleshees*/
gulp.task('sass', function(){
    // do something
    return gulp.src('src/sass/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'));
});

/*Minify JS*/
gulp.task('minify-js', function(){
    // do something
    return gulp.src('src/js/*.js')
           .pipe(uglify())
           .pipe(gulp.dest('dist/js'));
});


/*js concat*/
gulp.task('concat-js', function(){
    // do something
    return gulp.src('src/js/*.js')
           .pipe(concatJs('app.js'))
           .pipe(uglify())
           .pipe(gulp.dest('dist/js'));
});

//Watcher Funtion for automate all task RUN after watch every time
gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['concat-js']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/css/*.css', ['copy-files']);
});

//default task Run only one time after type command:gulp 
gulp.task('default', ['welcome-message', 'watch']);

/* Browser Sync Task*/
gulp.task('browser-sync', function(){
    // do something
    browserSync.init({
    //server{baseDir: './'} //use when u r not work on local sever
    proxy:'http://localhost:3000' // use local
    });
});














