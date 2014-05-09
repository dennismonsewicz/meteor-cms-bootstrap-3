Posts = new Meteor.Collection('posts', {
  schema: {
    slug: {
      type: String,
      label: "Slug",
      max: 30
    },
    title: {
      type: String,
      label: "Title",
      max: 100
    },
    html_content: {
      type: String,
      label: "Content",
      min: 0
    },
    user_id: {
      type: String,
      autoValue: function() {
        if(this.isInsert){
          return this.userId;
        } else {
          this.unset();
        }
      }
    },
    createdAt: {
      type: String,
      autoValue: function(){
        if(this.isInsert) {
          return Date.create().toISOString();
        } else if(this.isUpsert) {
          return {$setOnInsert: Date.create().toISOString()};
        } else {
          this.unset();
        }
      },
      denyUpdate: true
    },
    updatedAt: {
      type: String,
      autoValue: function() {
        if(this.isUpdate) {
          return Date.create().toISOString();
        }
      },
      denyInsert: true,
      optional: true
    }
  }
});

Posts.helpers({
  author: function() {
    var user = Meteor.users.findOne({_id: this.user_id});
    if(_.has(user, 'username'))
      return user.username;
    else
      return "ADMIN";
  }
})

Posts.allow({
  remove: function(userId, post){
    return post.user_id === userId || ManagedUsers.hasPermission('admin')
  },
  insert: function(userId, post){
    return false
  },
  update: function(userId, post, fields, modifier) {
    if(ManagedUsers.hasPermission('admin'))
      return true;
    else if(userId !== post.user_id)
      return false;
    else
      return false;
  }
})
