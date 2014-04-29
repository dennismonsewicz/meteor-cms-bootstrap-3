var initEditor = function() {
  var txtArea = $('textarea').wysihtml5();
  txtArea.data("wysihtml5").editor.setValue($('textarea').val());
}

Template.post.helpers({
  authorEmail: function() {
    return Meteor.users.findOne(this.user_id).emails[0].address;
  }
});

Template.post.rendered = function(){
  return this.$('span.time').timeago();
}

Template.postEdit.rendered = function() {
  initEditor();
}

Template.postNew.rendered = function() {
  initEditor();
}