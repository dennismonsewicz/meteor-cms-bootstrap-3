Template.post.helpers({
  authorUsername: function() {
    return Meteor.users.findOne(this.user_id).username;
  }
});

Template.postForm.helpers({
  wysiwygEditor: function() {
    var txtArea = $('textarea#postContent').wysihtml5();
    if(this.content)
      txtArea.data("wysihtml5").editor.setValue(this.content);
  }
})

Template.post.rendered = function(){
  return this.$('span.time').timeago();
}

Template.postNew.rendered = function(){
  $('textarea').wysihtml5();
}