const {watch, parallel, series} = require('gulp');

module.exports = function watching() {
    watch('src/**/*.scss', parallel('style'));
    watch('src/**/*.html', parallel('html'));
    watch('src/**/*.js', parallel('script'));
    watch('src/img/**/*.+(svg|ico)', parallel('rastr'));
    watch('src/img/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'));
    watch('src/static/**/*.*', series("files"));
    watch('src/fonts/**/*.*', series("fonts"));
    // watch('src/**/*.php', parallel('php'));
    // watch('src/**/*.json', parallel('html'));
    // watch('src/svg/css/**/*.svg', series('svg_css', 'style'));
    // watch('src/svg/sprite/**/*.svg', series('svg_sprite', 'rastr'));
    // watch('src/fonts/**/*.ttf', series('ttf', 'ttf2', 'fonts'));
}
