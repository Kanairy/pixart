// Grab DOM elements
var $brush = $('.brush');
var $setColorBtn = $('#set-color');
var $colorField = $('#color-field');

// Set color of brush box to input color
$setColorBtn.click(function(e) {
  e.preventDefault();

  $brush.css('background-color', $colorField.val());
})
