
// Commit 1 change the color of the box on click
$('#set-color').on('click', function(event) {
  event.preventDefault();

  var $input = $('#color-field').val();
  $('.brush').css("background-color", $input );
})

// Commit 2 change the color of the box when enter is pressed
$('#set-color').on('keydown', function(event) {
  event.preventDefault();

  var $input = $('#color-field').val();
  $('.brush').css("background-color", $input );
})

// commit 3 appending 20 divs of the square class
for (var i = 0; i <= 20; i++) {
  var $newDiv = $('<div>').addClass('square');
  $('#square').append($newDiv);
}

// commit 4 changing color of squares to green on click
$('.square').on('click', function(event) {
  event.preventDefault();

// commit 5 allow user to choose color by selecting in the input
  var $input = $('#color-field').val();
  $(event.target).css('background-color', $input);
})
