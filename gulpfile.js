const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const currentTask = "Task37";

const paths = {
  styles: {
    src: `./${currentTask}/styles/**/*.css`,
    dest: `./${currentTask}/styles/build/`,
  },
};

function styles() {
  const plugins = [autoprefixer(), cssnano()];

  return gulp
    .src(paths.styles.src)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(paths.styles.dest));
}

exports.styles = styles;
