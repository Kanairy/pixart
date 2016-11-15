
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

for (var i = 0; i < 20; i++) {
  var $div = $("<div>", { "class": "square"});
  $('body').append($div)
}
