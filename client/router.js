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
    controller: 'DashboardController',
    action: 'index',
    layoutTemplate: 'dashboardLayout'
  });

  // Posts

  this.route('postNew', {
    path: '/admin/posts/new',
    controller: 'PostsController',
    action: 'new',
    layoutTemplate: 'dashboardLayout'
  });

  this.route('postEdit', {
    path: '/admin/posts/:_id/edit',
    controller: 'PostsController',
    action: 'edit',
    layoutTemplate: 'dashboardLayout'
  });

  this.route('postRemove', {
    path: '/admin/posts/:_id/remove',
    controller: 'PostsController',
    action: 'edit',
    layoutTemplate: 'dashboardLayout'
  });
});