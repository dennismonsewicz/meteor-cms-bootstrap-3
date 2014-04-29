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
    content: {
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

Posts.allow({
  remove: function(userId, post){
    return true
  }
})