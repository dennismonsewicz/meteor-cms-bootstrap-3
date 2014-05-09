UI.registerHelper('toggleActive', function(route){
  if(Router.current()) {
    var pathName = Router.current().route.name;
    return (pathName === route) ? 'active' : '';
  }
})

UI.registerHelper('tagLine', function(){
  return 'FATHER, HUSBAND, WEB DEVELOPER';
})
