const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.libs_style = tasks.libs_style;
exports.watch = tasks.watch;
exports.html = tasks.html;
exports.bs_html = tasks.bs_html;
exports.libs_script = tasks.libs_script;
exports.script = tasks.script;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.files = tasks.files;
exports.fonts = tasks.fonts;

exports.default = gulp.parallel(
    exports.libs_style,
    exports.libs_script,
    exports.style,
    exports.script,
    exports.html,
    exports.rastr,
    exports.webp,
    exports.fonts,
    exports.files,
    exports.bs_html,
    exports.watch
)
