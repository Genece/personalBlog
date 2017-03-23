var app = require('koa')();
var router = require('koa-router')();
var http = require('http');
var koaStatic = require('koa-static-server');
const path = require('path');

const Pug = require('koa-pug');
const pug = new Pug({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  // locals: global_locals_for_all_pages,
  basedir: 'path/for/pug/extends',
  app: app // equals to pug.use(app) and app.use(pug.middleware)
})
pug.locals.someKey = 'some value'

app.use(koaStatic({rootDir: path.join(__dirname, "/public"), rootPath: '/public'}));

router.get('/index', function *(next) {
  this.render('index',{title:'首页'});
});

router.get('/first', function *(next) {
  this.render('first',{title:'第一篇'});
});

router.get('/second', function *(next) {
  this.render('second',{title:'第二篇'});
});

router.get('/typescript', function *(next) {
  this.render('typescript',{title:'ts'});
});

app
  .use(router.routes())
  .use(router.allowedMethods());

http.createServer(app.callback()).listen(80);


// var koaStatic = require('koa-static-server');
// var app = koa();
// const path = require('path');


// app.use(function *(){
//   this.body = 'Hello World';
// });

// app.use(router(app));
// // app.use(koaStatic({rootDir: path.join(__dirname, "/public"), rootPath: '/public'}));

// app.get('/index',function *(){
//   this.body = 'Hello World';
// })

// app.get('/article',function *(next) {
//   this.body = 'hellow world';
// })
// app.use(function *(){
//   this.body = 'Hello World';
// });
