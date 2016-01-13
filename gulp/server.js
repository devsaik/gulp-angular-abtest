'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');
var exec = require('child_process').exec;

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
gulp.task('gh',['build'],function(){
  exec('git checkout gh-pages', function (err, stdout, stderr) {
      console.log("checkout output:: "+stdout);
      console.log("checkout error:: "+stderr);
    exec('rsync -av /dist/assets/ /assets',function(err, stdout, stderr){
      console.log("checkout assets:: "+stdout);
      console.log("checkout assets:: "+stderr);
    });
    exec('rsync -av /dist/fonts/ /fonts',function(err, stdout, stderr){
      console.log("checkout fonts:: "+stdout);
      console.log("checkout fonts error:: "+stderr);
    });
    exec('rsync -av /dist/maps/ /maps',function(err, stdout, stderr){
      console.log("checkout maps:: "+stdout);
      console.log("checkout maps error:: "+stderr);
    });
    exec('rsync -av /dist/scripts/ /scripts',function(err, stdout, stderr){
      console.log("checkout scripts:: "+stdout);
      console.log("checkout scripts error:: "+stderr);
    });
    exec('rsync -av /dist/styles/ /styles',function(err, stdout, stderr){
      console.log("checkout styles:: "+stdout);
      console.log("checkout styles error:: "+stderr);
    });
    exec('rsync -av /dist/styles/index.html /index.html',function(err, stdout, stderr){
      console.log("checkout index:: "+stdout);
      console.log("checkout index error:: "+stderr);
    });
  });
});
