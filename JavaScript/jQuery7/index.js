window.setTimeout(function () {
  $("button").on("click", function(){
      $('div').fadeOut(1000, function(){
          $(this).remove();
      });
  });

  $("button").on("click", function(){
      $('div').fadeIn(1000, function(){
      });
  });

  $("button").on("click", function(){
      $('div').fadeToggle(500, function(){
      });
  });

  $("button").on("click", function(){
      $('div').slideDown();
  });

  $("button").on("click", function(){
      $('div').slideUp();
  });

  $("button").on("click", function () {
    $("div").toggle(1000, function () {
      $(this).remove();
    });
  });
}, 1000);
