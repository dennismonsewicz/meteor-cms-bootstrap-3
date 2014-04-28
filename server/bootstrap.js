if(!Posts.find().count()) {
  var Faker = Meteor.require('Faker');

  _.each(_.range(15), function(){
    var options = {
      slug: Faker.random.bs_noun(),
      title: Faker.random.catch_phrase_noun(),
      content: Faker.Lorem.paragraph(),
      createdAt: Date.create().toISOString()
    };

    var postId = Posts.insert(options);
  });
}