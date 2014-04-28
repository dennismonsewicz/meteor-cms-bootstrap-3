postSubmit = function() {
  var data = {};

  $.each($('#newPost').serializeArray(), function(){
    data[this.name] = this.value
  });

  data['createdAt'] = Date.create().toISOString();

  Posts.insert(data);
}

PostsController = AdminController.extend({
  edit: function() {
    return this.render(this.route.name);
  },
  new: function() {
    return this.render(this.route.name);
  },
  waitOn: function(){
    return Meteor.subscribe('singlePost', this.params._id)
  },
  data: function(){
    return Posts.findOne(this.params._id);
  }
});

Template.postNew.events({
  'submit #newPost': function(event){
    event.preventDefault();
    postSubmit();
    Router.go('dashboard');
  }
});