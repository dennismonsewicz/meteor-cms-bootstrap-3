AdminBaseController = RouteController.extend({
  onBeforeAction: function(){
    AccountsEntry.signInRequired(this)
  },
  layoutTemplate: 'dashboardLayout'
});
