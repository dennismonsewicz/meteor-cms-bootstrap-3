AdminPostsController = AdminBaseController.extend({
  edit: function() {
    return this.render(this.route.name);
  },
  new: function() {
    return this.render(this.route.name);
  },
  waitOn: function(){
    return Meteor.subscribe('singlePostById', Session.get('currentPage'));
  },
  data: function(){
    return Posts.findOne({_id: Session.get('currentPage')});
  }
});
