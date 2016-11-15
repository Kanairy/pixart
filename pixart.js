var $setColorBtn = $('#set-color');
var $brushDiv = $('.brush');
var $colorInput = $('#color-field');
var $canvas = $('.canvas');

var changeBrushColor = function(e) {
  e.preventDefault();
  $brushDiv.css('background', $colorInput.val());
}

var changeColor = function(e) {
  $(e.target).css('background', $brushDiv.css('background'));
}

for (var i = 0; i < 100; i++) {
  var $squareDiv = $('<div class="square">');
  $squareDiv.hover(changeColor);
  $canvas.append($squareDiv);
}

$setColorBtn.click(changeBrushColor);
