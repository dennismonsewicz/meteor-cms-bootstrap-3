Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404',
  onBeforeAction: function() {
    FlashMessages.clear();
  }
});

Router.map(function(){
  this.route('index', {
    path: '/',
    controller: 'HomeController',
    action: 'index'
  });

  // Dashboard

  this.route('dashboard', {
    path: '/admin/dashboard',
    controller: 'AdminDashboardController',
    action: 'index'
  });

  // Users

  this.route('users', {
    path: '/admin/users',
    controller: 'AdminUsersController',
    action: 'index'
  });

  // Posts

  // Admin

  this.route('postNew', {
    path: '/admin/posts/new',
    controller: 'AdminPostsController',
    action: 'new'
  });

  this.route('postEdit', {
    path: '/admin/posts/:_id/edit',
    controller: 'AdminPostsController',
    action: 'edit'
  });

  this.route('postRemove', {
    path: '/admin/posts/:_id/remove',
    controller: 'AdminPostsController',
    action: 'edit'
  });

  // Public

  this.route('postShow', {
    path: '/posts/:_id',
    controller: 'PublicPostsController',
    action: 'show'
  })
});