PublicPostsController = BaseController.extend({
  show: function() {
    return this.render(this.route.name);
  },
  waitOn: function() {
    return Meteor.subscribe('singlePost', this.params._id);
  },
  data: function(){
    return Posts.findOne(this.params._id);
  }
});