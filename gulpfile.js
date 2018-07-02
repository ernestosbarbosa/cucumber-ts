var gulp = require('gulp');
var del = require('del');

gulp.task('build', ['clean'], function () {
    return gulp.src('test/features/*').pipe(gulp.dest('dist/test/features'));
});
    
gulp.task('clean', function () {
  return del(['./dist/']);
});
