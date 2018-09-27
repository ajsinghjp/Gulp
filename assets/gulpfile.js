/* variable Definition */
var   gulp = require('gulp');

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