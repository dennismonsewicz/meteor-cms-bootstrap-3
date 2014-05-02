HomeController = BaseController.extend({
  index: function(){
    return this.render(this.route.name);
  }
})