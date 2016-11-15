var $setColorBtn = $('#set-color');
var $brushDiv = $('.brush');
var $colorInput = $('#color-field');

var changeColor = function(e) {
  e.preventDefault();
  $brushDiv.css('background', $colorInput.val());
}

$setColorBtn.click(changeColor);
