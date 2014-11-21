$(function() {
  var $view = $("main"),
      pages;

  $.ajax({
    url: "book.json",
    dataType: "text",
    success: function(j) {
      pages = JSON.parse(j);
    }
  });

  $view.on("click", "ol a", function(e) {
    var $e = $(e.currentTarget),
        idx = $e.attr("data-page");
    e.preventDefault();

    $view.html(templates.page(pages[idx]));
  });

  $view.on("click", "[data-view-id=start]", function(e) {
    var $e = $(e.currentTarget);
    e.preventDefault();

    $view.html(templates.page(pages["start"]));
  });
});
