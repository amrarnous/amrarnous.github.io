var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    prefix  = require('gulp-autoprefixer');
// Scripts Task
// Sass
gulp.task('sass', function(){
    gulp.src('scss/**/*.scss').
    pipe(sass()).
    pipe(prefix('last 2 versions')).
    pipe(gulp.dest('css/'));
});
// Uglifies
gulp.task('scripts', function(){
    // gulp.src // this command allow us to run a specific command in a specific directory
    // pipe // type inside it the task u want to run
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('minjs')); 
});
gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
});
gulp.task('default', ['watch']);