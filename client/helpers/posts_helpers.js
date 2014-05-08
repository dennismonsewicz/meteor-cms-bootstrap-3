UI.registerHelper('ago', function(time){
  return moment(time).format("MMM Do YYYY");
});
