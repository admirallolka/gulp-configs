const {src, dest} = require('gulp');
const sass = require('gulp-sass');
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function style() {
    return src('src/scss/style.scss')
        .pipe(map.init())
        .pipe(bulk())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(prefixer({
            overrideBrowserslist: ['last 2 versions'],
            browsers: [
                'Firefox >= 60',
                'Chrome >= 60',
                'Firefox ESR',
                'iOS >= 12',
                'Safari >= 12',
                'not Explorer <= 11',
            ],
        }))
        .pipe(clean({
            level: 2
        }))
        .pipe(concat('style.min.css'))
        .pipe(map.write('../sourcemaps/'))
        .pipe(dest('build/css/'))
        .pipe(bs.stream())
}
