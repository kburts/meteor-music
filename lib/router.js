Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});


Router.route('/home', function () {
  this.render('homepage');
});

Router.route('/items', function () {
  this.render('Items');
});

Router.route('/hello', function () {
  this.render('hello');
});