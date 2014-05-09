PublicPostsController = BaseController.extend({
  show: function() {
    return this.render(this.route.name);
  },
  waitOn: function() {
    return Meteor.subscribe('singlePost', this.params.slug);
  },
  onBeforeAction: function() {
    this.subscribe('posts');
    this.subscribe('users');
  },
  data: function(){
    var post = Posts.findOne({slug: this.params.slug});
    var user = Meteor.users.findOne(post.user_id);
    return {
      posts: Posts.find({}, {limit: 6, sort: {createdAt: -1}}),
      createdAt: post.createdAt,
      title: post.title,
      author: user.username,
      html_content: post.html_content
    }
  }
});
