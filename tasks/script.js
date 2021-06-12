const {src, dest} = require('gulp');
const map = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const importFile = require("gulp-file-include");
const concat = require('gulp-concat');
const bs = require('browser-sync');

module.exports = function script(done) {
    return src(["src/js/script.js"])
        .pipe(map.init())
        .pipe(importFile({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(map.write('../sourcemaps'))
        .pipe(dest('build/js/'))
        .pipe(bs.stream())
}
