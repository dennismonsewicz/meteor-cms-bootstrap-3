Template.postEdit.helpers({
  editingDoc: function() {
    return Posts.findOne(Session.get('currentPage'));
  }
});

Template.postEdit.rendered = function() {
  $('.contentHTML').wysihtml5({
    html: true
  });
}
