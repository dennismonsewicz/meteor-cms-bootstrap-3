Meteor.publish('posts', function(id){
  var options = {};

  if(id)
    options._id = id;

  return Posts.find(options)
})

if(!Posts.find().count()) {
  var postId = Posts.insert({
    slug: 'hello-world',
    title: 'Hello World',
    content: '<p>This is a test. Hello World</p>',
    createdAt: Date.create().toISOString()
  });
}