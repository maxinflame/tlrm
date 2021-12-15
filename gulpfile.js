const gulp = require('gulp');
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const svgstore = require("gulp-svgstore");
const htmlmin = require("gulp-htmlmin");
const cssmin = require("gulp-cssmin");
const imagemin = require("gulp-imagemin");
const jsmin = require('gulp-jsmin');
const webp = require('gulp-webp');

// styles

const styles = () => {
    return gulp.src("src/sass/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css/"))
}

exports.styles = styles;

// Sprite

const sprite = () => {
  return gulp.src("src/img/icons/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("src/img/"));
}

exports.sprite = sprite;

// Watcher

const watcher = () => {
  gulp.watch("src/sass/**/*.scss", gulp.series(styles));
  gulp.watch("src/img/icons/*.svg", gulp.series(sprite));
}

exports.watcher = watcher;

// HTML

const html = () => {
  return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

// CSS

const css = (done) => {
  gulp.src('src/**/*.css')
      .pipe(cssmin())
      .pipe(gulp.dest('build'));
      done();
};

exports.css = css;

// Images

const images = () => {
  return gulp.src("src/img/**/*.{jpg,jpeg,png}")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img"))
}

exports.images = images;

// Copy

const copy = (done) => {
  gulp.src([
    "src/**/*.{woff2,woff,svg}",
  ], {
    base: "src"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// JS

const js = (done) => {
  gulp.src("src/**/*.js")
      .pipe(jsmin())
      .pipe(gulp.dest("build"));
  done();
};

exports.js = js;

// Webp

const createWebp = () => {
  return gulp.src("src/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.createWebp = createWebp;

// Build

const build = gulp.series(
  gulp.parallel(
    css,
    html,
    images,
    createWebp,
    js,
    copy,
  ),
);

exports.build = build;
