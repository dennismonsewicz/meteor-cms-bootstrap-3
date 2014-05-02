HomeController = RouteController.extend({
  layoutTemplate: 'layout'
});

Template._loginButtons.events({
  'click #login-buttons-logout': function(ev, t){
    Meteor.logout(function() {
      Router.go('home');
    });
  }
});