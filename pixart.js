var $setColorBtn = $('#set-color');
var $brushDiv = $('.brush');
var $colorInput = $('#color-field');
var $body = $('body');

for (var i = 0; i < 20; i++) {
  var $squareDiv = $('<div class="square">');
  $body.append($squareDiv);
}

var changeBrushColor = function(e) {
  e.preventDefault();
  $brushDiv.css('background', $colorInput.val());
}

var changeColor = function(e) {
  $(e.target).css('background', 'green');
}

$setColorBtn.click(changeBrushColor);
$body.click(changeColor);
