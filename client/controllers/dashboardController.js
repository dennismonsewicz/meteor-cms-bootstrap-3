dashboardController = RouteController.extend({
  index: function(){
    if(Meteor.loggingIn())
      return this.render('loading');

    if(!Meteor.user())
      Router.go('home');

    return this.render(this.route.name);
  }
});