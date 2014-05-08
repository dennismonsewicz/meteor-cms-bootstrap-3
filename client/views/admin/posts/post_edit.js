Template.postEdit.helpers({
  editingDoc: function() {
    return Posts.findOne({_id: Session.get('currentPage') });
  }
});

Template.postEdit.rendered = function() {
  $('.contentHTML').wysihtml5();
}
