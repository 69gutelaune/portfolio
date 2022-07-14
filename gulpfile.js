const { src, dest, watch } = require("gulp");
const minifyJs = require("gulp-uglify");
// in terminal: npm i -D gilp-concat
const concat = require("gulp-concat");

// const bundleJs = () => {
//   return src("./static/js/**/*.js").pipe(minifyJs()).pipe(dest("./dist/js/"));
// };
// to concat:
const bundleJs = () => {
  return src("./static/js/**/*.js")
    .pipe(minifyJs())
    .pipe(concat("bundle.js"))
    .pipe(dest("./dist/js/"));
};

const devWatch = () => {
  watch("./static/js/**/*.js", bundleJs);
};
exports.bundleJs = bundleJs;
exports.devWatch = devWatch;

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask;
