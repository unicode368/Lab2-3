const gulp = require('gulp');
const purify = require('gulp-purifycss');
var sass = require('gulp-sass');

gulp.task('purifyCSS', () => {
  return gulp.src('./src/app/**/*.scss')
    .pipe(
      purify(
        ['./src/app/**/*.ts', './src/app/**/*.html'],
        {
          info: true, // Outputs reduction information (like in the screenshot above)
          minify: true, // Minifies the files after reduction
          rejected: false, // Logs the CSS rules that were removed
          whitelist: ['*transition*', '*dimmer*'] // Ignored css classes
        }
      ),
    )
    .pipe(gulp.dest('./dist/'));
});