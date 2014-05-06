AdminBaseController = RouteController.extend({
  onBeforeAction: function(){
    if(Meteor.loggingIn())
      return this.render('loading');

    if(!Meteor.user())
      Router.go('index');
  },
  layoutTemplate: 'dashboardLayout'
});