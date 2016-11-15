var $setColorBtn = $('#set-color');
var $brushDiv = $('.brush');
var $colorInput = $('#color-field');
var $canvas = $('.canvas');
var $toolSelectBtn = $('#tool-select');
var $brushControlsDiv = $('.brush-controls');
var $stampControlsDiv = $('.stamp-controls');

var changeBrushColor = function(e) {
  e.preventDefault();
  $brushDiv.css('background', $colorInput.val());
}

var changeColor = function(e) {
  $(e.target).css('background', $brushDiv.css('background'));
}

var changeTool = function() {
  $brushControlsDiv.toggle();
  $stampControlsDiv.toggle();
}

for (var i = 0; i < 100; i++) {
  var $squareDiv = $('<div class="square">');
  $squareDiv.hover(changeColor);
  $canvas.append($squareDiv);
}

$toolSelectBtn.click(changeTool);
$setColorBtn.click(changeBrushColor);
