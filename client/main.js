Template._loginButtonsLoggedInDropdown.events({
  'click #my-account': function(event, t){
    Router.go('editProfile');
  },
  'click #dashboard': function(event, t){
    Router.go('dashboard');
  }
});

Meteor.startup(function(){
  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/admin/dashboard',
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  })
});
