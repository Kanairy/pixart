
var $button = $('#set-color');
var input = $('#color-field').val('enter a color');
var $brush = $('.brush');
var $square = $('.square');
var $stamp = $('#stamp');
var $brush2 = $('#brush');

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


$stamp.click(function(e) {
  e.preventDefault();
  $('body .square').click(function(event) {
    event.target.style.background = input.val()
  });
});

$brush2.click(function(e) {
  e.preventDefault();
  $('body .square').mouseover(function(event) {
    event.target.style.background = input.val()
  });
});

var $button2 = $('#set-image');

$button2.click(function(e) {
  e.preventDefault();
  $brush.css('background-image', input.val());
});
