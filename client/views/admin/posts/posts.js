var setupEditor = function(doc) {
  var txtArea = $('textarea#postContent').wysihtml5();

  if(doc.content)
    txtArea.data("wysihtml5").editor.setValue(this.content);
}

Template.postNew.helpers({
  wysiwygEditor: function() {
    setupEditor(this);
  }
});

Template.postEdit.helpers({
  wysiwygEditor: function() {
    setupEditor(this);
  }
});

Template.post.rendered = function(){
  return this.$('span.time').timeago();
}

Template.postNew.rendered = function(){
  $('textarea').wysihtml5();
}