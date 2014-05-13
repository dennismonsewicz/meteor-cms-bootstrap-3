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
  if(_.has(Meteor.settings.public, 'footer_tagline'))
    return Meteor.settings.public.footer_tagline;
  else
    return "";
});

UI.registerHelper('siteContactEmail', function(){
  if(_.has(Meteor.settings.public, 'site_contact_email'))
    return Meteor.settings.public.site_contact_email;
  else
    return "foo@baz.com";
});

UI.registerHelper('footerCityState', function(){
  if(_.has(Meteor.settings.public, 'footer_city_state'))
    return Meteor.settings.public.footer_city_state;
  else
    return "Foo, Qux";
});
