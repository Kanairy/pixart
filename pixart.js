var ROWS = 20;
var COLUMNS = 20;

// Grab DOM elements
var $brush = $('.brush');
var $stamp = $('.stamp');
var $colorField = $('#color-field');
var $stampField = $('#stamp-field');

// Set color of brush box to input color
$('#brush-form').submit(function(e) {
  e.preventDefault();

  $brush.css('background-color', $colorField.val());
});

// Set stamp image
$('#stamp-form').submit(function(e) {
  e.preventDefault();
  $stamp.css('background-image', 'url(' + $stampField.val() + ')');
  console.log($stampField.val());
});

// Append squares to body
for (var i = 0; i < ROWS; i++) {
  var $row = $('<div>');
  for (var j = 0; j < COLUMNS; j++) {
    var $square = $('<div>').addClass('square');
    $row.append($square);
  }
  $('body').append($row);
}

// Change square fill
$('body').on('mouseover', '.square', function(e) {
  var tool = $('input[name="tool"]:checked').val();
  var $target = $(e.target);

  // If brush selected, set square color
  if (tool === "brush") {
    var newColour = $brush.css('background-color');
    $target.css('background-color', newColour)
      .css('background-image', '');
  }
  // Else, stamp square
  else {
    $target.css('background-image', $stamp.css('background-image'));
  }
});
