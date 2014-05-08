PublicPostsController = BaseController.extend({
  show: function() {
    return this.render(this.route.name);
  },
  waitOn: function() {
    return Meteor.subscribe('singlePost', this.params.slug);
  },
  data: function(){
    return Posts.findOne({slug: this.params.slug});
  }
});
