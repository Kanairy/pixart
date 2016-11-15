// Grab DOM elements
var $brush = $('.brush');
var $form = $('#form');
var $colorField = $('#color-field');

// Set color of brush box to input color
$form.submit(function(e) {
  e.preventDefault();

  $brush.css('background-color', $colorField.val());
})
