/* variable Definition */
var   gulp = require('gulp');
var   sass = require('gulp-sass');
var   uglify = require('gulp-uglify');
var   concatJs = require('gulp-concat');

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

//Watcher Funtion for automate all task
gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['concat-js']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/css/*.css', ['copy-files']);


});