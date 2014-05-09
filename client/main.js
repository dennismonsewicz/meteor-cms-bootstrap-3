Template._loginButtonsLoggedInDropdown.events({
  'click #my-account': function(event, t){
    Router.go('editProfile');
  },
  'click #dashboard': function(event, t){
    Router.go('dashboard');
  }
});

Template.header.events({
  'click #posts-link': function(event, t){
    $('#posts').scrollintoview();
  }
})

Meteor.startup(function(){
  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/admin/dashboard',
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  })
});

if(!this.userId) {
  Meteor.subscribe('users');
}
