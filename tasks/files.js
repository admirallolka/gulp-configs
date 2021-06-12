const {src, dest} = require("gulp")

module.exports = function files() {
    return src('src/static/**/*')
        .pipe(dest("build/static"))
}
