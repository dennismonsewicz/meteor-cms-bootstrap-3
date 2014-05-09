Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404',
  onBeforeAction: function() {
    FlashMessages.clear();
  }
});

// Public Routes

Router.map(function(){

  this.route('index', {
    path: '/',
    controller: 'HomeController',
    action: 'index'
  });

  this.route('about', {
    path: '/about',
    controller: 'HomeController',
    action: 'about'
  });

  this.route('postShow', {
    path: '/posts/:slug',
    controller: 'PublicPostsController',
    action: 'show'
  });

});

// Admin Routes

Router.map(function(){
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
    action: 'edit',
    onBeforeAction: function(){
      Session.set('currentPage', this.params._id);
    }
  });
})
