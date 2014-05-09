Template.editActions.rendered = function(){
  var elem = $('.remove-post');
  var _id = elem.attr('data-id');
  elem.confirmation({
    onConfirm: function(){
      Posts.remove(_id);
    }
  });
};
