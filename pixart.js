
  var $button = $('#set-color');
  var input = $('#color-field').val('enter a color');
  var $brush = $('.brush');

  $button.click(function(e) {
    e.preventDefault();
    $brush.css('background-color', input.val());
  });

  input.keypress(function() {
    $brush.css('background-color', input.val());
  });
