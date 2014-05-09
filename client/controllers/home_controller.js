HomeController = BaseController.extend({
  index: function(){
    return this.render(this.route.name);
  },
  about: function() {
    return this.render(this.route.name);
  },
  waitOn: function(){
    return Meteor.subscribe('posts');
  },
  data: function(){
    return {
      posts: Posts.find({}, {limit: 6, sort: {createdAt: -1}})
    }
  }
})
