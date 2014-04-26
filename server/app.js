Meteor.publish('posts', function(){
  return Posts.find()
})

if(!Posts.find().count()) {
  var postId = Posts.insert({
    slug: 'hello-world',
    title: 'Hello World',
    content: '<p>This is a test. Hello World</p>',
    createdAt: Date.create().toISOString()
  });
}