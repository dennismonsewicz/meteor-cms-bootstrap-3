HomeController = RouteController.extend({
  onBeforeAction: function(){
    if(Meteor.loggingIn())
      return this.render('loading');

    if(!Meteor.user())
      Router.go('home');
  },
  layoutTemplate: 'layout'
});

Template._loginButtons.events({
  'click #login-buttons-logout': function(ev, t){
    Meteor.logout(function() {
      Router.go('home');
    });
  }
});