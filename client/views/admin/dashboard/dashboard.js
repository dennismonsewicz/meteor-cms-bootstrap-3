Template.editActions.events({
  'click .remove-post': function(e) {
    e.preventDefault();
    Posts.remove(this._id);
  }
});