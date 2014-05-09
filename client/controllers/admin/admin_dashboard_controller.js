AdminDashboardController = AdminBaseController.extend({
  index: function(){
    return this.render(this.route.name);
  },
  waitOn: function(){
    if(ManagedUsers.hasPermission('admin'))
      return Meteor.subscribe('posts')
    else
      return Meteor.subscribe('myPosts')
  },
  data: function(){
    return {
      latestPosts: Posts.find({}, {limit: 5})
    };
  }
});