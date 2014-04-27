postsController = RouteController.extend({
  edit: function() {
    return this.render(this.route.name);
  },
  waitOn: function(){
    return Meteor.subscribe('posts', this.params._id)
  },
  data: function(){
    return Posts.findOne({_id: this.params._id});
  }
})