Meteor.publish('posts', function(id){
  var options = {};

  if(id)
    options._id = id;

  return Posts.find(options, {sort: {createdAt: -1}});
});

Meteor.publish('singlePost', function(slug){
  check(slug, String);
  return Posts.find({slug: slug});
});

Meteor.publish('myPosts', function(){
  return Posts.find({user_id: this.userId});
})
