homeController = RouteController.extend({
  index: function(){
    if(Meteor.loggingIn()){
      return this.render('loading');
    }

    if(Meteor.user()) {
      return this.redirect('dashboard');
    }

    return this.render(this.route.name);
  }
});

Template._loginButtons.events({
  'click #login-buttons-logout': function(ev, t){
    Meteor.logout(function() {
      Router.go('home');
    });
  }
});