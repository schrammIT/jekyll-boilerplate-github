var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var htmltidy    = require('gulp-htmltidy');
var critical    = require('critical');


var paths = {
    browserSyncProxy: "localhost:4000"
};

/**
 *  ---- gulp watch:
 *
 *  - compile Less on changing less files
 *  - reload all browser with browser sync
 */
gulp.task("watch", ["jekyll-serve" ,"browser-sync", "bs-reload"], function () {
    // -- reload browser-sync everytime we saved a php-file
    gulp.watch(["_site/*.html"], ["bs-reload"]);

});

// -- run "bundle exec jekyll serve" to start jekyll server (now with gem)
gulp.task('jekyll-serve', () => {
    const jekyll = cp.spawn( 'bundle',
      ['exec', 'jekyll', 'serve'],
      {stdio: 'inherit'}
    );
});

/**
 * ---- browser-sync ----
 *
 */
gulp.task('browser-sync', function () {
    browserSync({
        proxy: paths.browserSyncProxy,
    });

    //gulp.watch("src/*.css", ['bs-reload']); // reload on change /src/styles.css
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
