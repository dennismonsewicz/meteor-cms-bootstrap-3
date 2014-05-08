BaseController = RouteController.extend({
  layoutTemplate: 'layout',
  onBeforeAction: function(){
    if(Meteor.loggingIn())
      return this.render('loading');
  }
});

Template._loginButtons.events({
  'click #login-buttons-logout': function(ev, t){
    Meteor.logout(function() {
      Router.go('index');
    });
  }
});