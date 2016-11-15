var NUM_SQUARES = 20;

// Grab DOM elements
var $brush = $('.brush');
var $form = $('#form');
var $colorField = $('#color-field');

// Set color of brush box to input color
$form.submit(function(e) {
  e.preventDefault();

  $brush.css('background-color', $colorField.val());
});

// Append squares to body
for (var i = 0; i < NUM_SQUARES; i++) {
  var $square = $('<div>').addClass('square');
  $('body').append($square);
}

// Change square colour to brush colour on click
$('body').on('click', '.square', function(e) {
  var newColour = $brush.css('background-color');
  $(e.target).css('background-color', newColour);
});
