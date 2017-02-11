var gulp = require("gulp");
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('src/css/style.scss')
        .pipe(sass({includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/']}).on('error', sass.logError))
        .pipe(gulp.dest('./_site/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch("src/css/**/*.scss", ['sass'])
});


gulp.task('default', ['sass:watch']);