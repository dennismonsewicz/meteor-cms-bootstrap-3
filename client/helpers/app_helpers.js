UI.registerHelper('toggleActive', function(route){
  if(Router.current()) {
    var pathName = Router.current().route.name;
    return (pathName === route) ? 'active' : '';
  }
})
