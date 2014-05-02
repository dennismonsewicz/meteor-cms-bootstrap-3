Template.header.headerTitle = function() {
  if(Meteor.user())
    return 'Control Panel';
  else
    return 'Welcome';
}

Template._loginButtonsLoggedInDropdown.events({
  'click #my-account': function(event, t){
    Router.go('editProfile');
  },
  'click #dashboard': function(event, t){
    Router.go('dashboard');
  }
});
