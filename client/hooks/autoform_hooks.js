AutoForm.addHooks(['editPostForm', 'insertPostForm'], {
  after: {
    insert: function(error, result){
      if(error)
        FlashMessages.sendError(error);
      else
        FlashMessages.sendSuccess('Post Created!');

      Router.go('dashboard');
    },
    update: function(error, result) {
      if(error)
        FlashMessages.sendError(error);
      else
        FlashMessages.sendSuccess('Post Updated!');

      Router.go('dashboard');
    }
  }
});