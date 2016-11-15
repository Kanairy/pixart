var $setColorBtn = $('#set-color');
var $brushDiv = $('.brush');
var $colorInput = $('#color-field');
var $body = $('body');

var changeBrushColor = function(e) {
  e.preventDefault();
  $brushDiv.css('background', $colorInput.val());
}

var changeColor = function(e) {
  $(e.target).css('background', $brushDiv.css('background'));
}

for (var i = 0; i < 20; i++) {
  var $squareDiv = $('<div class="square">');
  $squareDiv.hover(changeColor);
  $body.append($squareDiv);
}

$setColorBtn.click(changeBrushColor);
