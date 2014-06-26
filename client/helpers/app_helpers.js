UI.registerHelper('toggleActive', function(route){
  if(Router.current()) {
    var pathName = Router.current().route.name;
    return (pathName === route) ? 'active' : '';
  }
});

UI.registerHelper('tagLine', function(){
  return 'FATHER, HUSBAND, WEB DEVELOPER';
});

UI.registerHelper('footerTagLine', function(){
  return "";
});

UI.registerHelper('siteContactEmail', function(){
  return "foo@baz.com";
});

UI.registerHelper('footerCityState', function(){
  return "Foo, Qux";
});
