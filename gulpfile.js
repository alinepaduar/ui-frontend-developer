var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('start', function() {
    console.log('====================================');
    console.log('GULP INICIADO');
    console.log('====================================');
});

gulp.task('css', ['start'], function() {
    return gulp.src(['sass/header.sass']).pipe(sass()).pipe(gulp.dest('css'))
});

gulp.task('default', ['css'], function() {
    console.log('====================================');
    console.log('GULP FINALIZADO');
    console.log('====================================');
});
