AdminBaseController = RouteController.extend({
  onBeforeAction: function(){
    if(Meteor.loggingIn())
      return this.render('loading');

    if(!Meteor.user())
      return Router.go('index');
  },
  layoutTemplate: 'dashboardLayout'
});
