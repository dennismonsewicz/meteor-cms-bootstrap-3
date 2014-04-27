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
    path: '/admin/dashboard',
    controller: 'dashboardController',
    action: 'index',
    layoutTemplate: 'dashboardLayout'
  });

  this.route('postEdit', {
    path: '/admin/posts/:_id/edit',
    controller: 'postsController',
    action: 'edit',
    layoutTemplate: 'dashboardLayout'
  });

  this.route('postRemove', {
    path: '/admin/posts/:_id/remove',
    controller: 'postsController',
    action: 'edit',
    layoutTemplate: 'dashboardLayout'
  });
});