Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404'
});

Router.map(function(){
  this.route('home', {
    path: '/',
    controller: 'homeController',
    action: 'index',
    layoutTemplate: 'layout'
  });

  this.route('dashboard', {
    path: '/dashboard',
    controller: 'dashboardController',
    action: 'index',
    layoutTemplate: 'dashboardLayout'
  })
});