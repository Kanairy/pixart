var $setColorBtn = $('#set-color');
var $setImageBtn = $('#set-image');
var $brushDiv = $('.brush');
var $imageDiv = $('.image');
var $colorInput = $('#color-field');
var $imageInput = $('#image-field');
var $canvas = $('.canvas');
var $toolSelectBtn = $('#tool-select');
var $brushControlsDiv = $('.brush-controls');
var $stampControlsDiv = $('.stamp-controls');

var activeTool = "brush";

var changeBrushColor = function(e) {
  e.preventDefault();
  $brushDiv.css('background', $colorInput.val());
}

var changeStamp = function(e) {
  e.preventDefault();
  $imageDiv.css('background', 'center/cover url(' + $imageInput.val() + ')');
}

var changeColor = function(e) {
  if (activeTool === "brush") {
    $(e.target).css('background', $brushDiv.css('background'));
  } else {
    $(e.target).css('background', $imageDiv.css('background'));
  }
}

var changeTool = function() {
  $brushControlsDiv.toggle();
  $stampControlsDiv.toggle();
  if (activeTool === "brush") {
    activeTool = "stamp";
  } else {
    activeTool = "brush";
  }
}

for (var i = 0; i < 100; i++) {
  var $squareDiv = $('<div class="square">');
  $squareDiv.hover(changeColor);
  $canvas.append($squareDiv);
}

$toolSelectBtn.click(changeTool);
$setColorBtn.click(changeBrushColor);
$setImageBtn.click(changeStamp);
