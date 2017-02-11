var gulp = require("gulp");
var sass = require('gulp-sass');
var exec = require('child_process').exec;

gulp.task('sass', function () {
    gulp.src('src/css/style.scss')
        .pipe(sass({includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/']}).on('error', sass.logError))
        .pipe(gulp.dest('./_site/'));
});

gulp.task('sass:watch', function () {
    gulp.watch("src/css/**/*.scss", ['sass'])
});

gulp.task('webpack', function (cb) {
    exec('webpack', function(error, stdout, stderr) {
        console.log(stderr);
        console.log(stdout);
        cb(err);
    });
});

gulp.task('react:watch', function () {
    gulp.watch("src/js/**/*.*", ['webpack'])
});


gulp.task('default', ['sass:watch']);