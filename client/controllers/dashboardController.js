dashboardController = RouteController.extend({
  index: function(){
    if(Meteor.loggingIn())
      return this.render('loading');

    if(!Meteor.user())
      Router.go('home');

    return this.render(this.route.name);
  },
  waitOn: function(){
    return Meteor.subscribe('posts')
  },
  data: function(){
    return {
      latestPosts: Posts.find({}, {limit: 5, sort: {createdAt: -1}})
    };
  }
});