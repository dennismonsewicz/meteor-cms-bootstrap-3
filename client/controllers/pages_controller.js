PagesController = BaseController.extend({
  about: function() {
    return this.render(this.route.name);
  }
});
