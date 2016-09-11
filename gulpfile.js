var gulp = require('gulp');
var minify = require('gulp-minify');


gulp.task('build', function () {
    gulp.src('L.Control.PluginBoilerplate.js')
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', function () {
    gulp.watch('L.Control.PluginBoilerplate.js', ['build']);
});

gulp.task('default', ['build', 'watch']);


