AdminDashboardController = AdminBaseController.extend({
  index: function(){
    return this.render(this.route.name);
  },
  waitOn: function(){
    return Meteor.subscribe('posts')
  },
  data: function(){
    return {
      latestPosts: Posts.find({}, {limit: 5})
    };
  }
});