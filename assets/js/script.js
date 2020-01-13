(function (window, document, $) {
  $('.menu-toggle-wrap').on("click", function() {
    $(this).next().toggleClass('active');
    $(this).parents('body').toggleClass('show-nav');
  });

  var setCustomBgImg = function(el) {
    el = $(el);
    var imgUrl = el.attr('data-background-image');
    imgUrl != "" && (imgUrl = "url(" + imgUrl + ")");
    el.css('background-image', imgUrl);
  };

  $("[data-background-image]").each(function(k, el) {
    setCustomBgImg(el);

    $(el).change(function() {
      setCustomBgImg(el);
    });
  });

  // Find all elements with a `data-background-color` attribute
  var setCustomBgColor = function(el) {
    el = $(el);
    var color = el.data('background-color');
    color != "" && (color = "#" + color);
    el.css('background-color', color);
  }

  $("[data-background-color]").each(function(k, el) {
    setCustomBgColor(el);
  });

  $('a[href^="#"]').click(function() {  
    var target = $(this.hash);  
    if (target.length == 0) target = $('section[id="' + this.hash.substr(1) + '"]');  
    if (target.length == 0) target = $('html');  
    $('html, body').animate({ scrollTop: target.offset().top }, 400);  
    return false;  
  });
  
}(this, this.document, this.jQuery));
