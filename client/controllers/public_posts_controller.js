PublicPostsController = BaseController.extend({
  show: function() {
    return this.render(this.route.name);
  },
  waitOn: function() {
    return Meteor.subscribe('singlePost', this.params.slug);
  },
  onBeforeAction: function() {
    this.subscribe('posts');
  },
  data: function(){
    var post = Posts.findOne({slug: this.params.slug});
    return {
      posts: Posts.find({}, {limit: 6, sort: {createdAt: -1}}),
      createdAt: post.createdAt,
      title: post.title,
      author: post.author,
      html_content: post.html_content
    }
  }
});
