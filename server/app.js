Meteor.publish('posts', function(id){
  var options = {};

  if(id)
    options._id = id;

  return Posts.find(options, {sort: {createdAt: -1}});
});

Meteor.publish('singlePost', function(id){
  check(id, String);
  return Posts.find({_id: id});
})