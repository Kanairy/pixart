var $setColorBtn = $('#set-color');
var $brushDiv = $('.brush');
var $colorInput = $('#color-field');
var $body = $('body');

for (var i = 0; i < 20; i++) {
  var $squareDiv = $('<div class="square">');
  $body.append($squareDiv);
}

var changeColor = function(e) {
  e.preventDefault();
  $brushDiv.css('background', $colorInput.val());
}

$setColorBtn.click(changeColor);
