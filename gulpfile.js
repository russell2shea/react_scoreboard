// dependencies
const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass         = require('gulp-sass');
const browsersync  = require('browser-sync').create();
const rename       = require('gulp-rename');
const sourcemaps   = require('gulp-sourcemaps')
const react        = require('gulp-react');

function scss(done){
  gulp.src('src/components/sass/styles.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
  .pipe(gulp.dest('src/components/css/'))
  .pipe(sass({outputStyle:'compressed'}))
  .pipe(rename('styles-min.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css/'))
  .pipe(browsersync.stream());
  done();
}

function browserSync(done) {
  browsersync.init({
    server: {
       baseDir: "./",
    },
  });
  done();
}

function transpileJs(done){
  gulp.src('src/components/js/app.jsx')
  .pipe(react())
  .pipe(gulp.dest('js'))
  .pipe(browsersync.stream());
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch("src/components/sass/*.scss", scss);
  gulp.watch("src/components/js/app.jsx", transpileJs);
  gulp.watch("*.html", browserSyncReload);
}


gulp.task('default', gulp.parallel(watchFiles, browserSync));
