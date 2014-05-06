Template.post.rendered = function(){
  return this.$('span.time').timeago();
}

UI.registerHelper('editor', function(context, options){
  var content = (context !== 'undefined') ? context : null;
  var html = ' <div class="form-group">';
  html += '<label class="control-label">Content</label>';
  html += '<textarea rows="5" name="content" class="form-control" id="postContent" required data-schema-key="content">' + content + '</textarea>';
  html += '</div>';

  if(content) {
    var editor = $('#postContent').wysihtml5();
    editor.data("wysihtml5").editor.setValue(content);
  }

  return Spacebars.SafeString(html);
});