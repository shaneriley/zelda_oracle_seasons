var templates = (function() {
  var o = {};
  $("[type=\"text/x-handlebars\"]").each(function() {
    o[$(this).attr("data-id")] = Handlebars.compile(this.innerHTML);
  });
  return o;
})();
