const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

function compileJs() {
    return gulp.src(['./vendor/**/*.js', './js/*.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
}

function compileCSS() {
    return gulp.src('./styles/index.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
}

exports.styles = compileCSS;
exports.scripts = compileJs;