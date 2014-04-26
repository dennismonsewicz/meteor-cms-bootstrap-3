Template.header.headerTitle = function() {
  if(Meteor.user())
    return 'Control Panel';
  else
    return 'Welcome';
}
