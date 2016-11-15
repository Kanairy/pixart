
// Commit 1 change the color of the box on click
$('#set-color').on('click', function(event) {
  event.preventDefault();

  var input = $('#color-field').val();
  $('.brush').css("background-color", input );
})

// change the color of the box when enter is pressed
$('#set-color').on('keydown', function(event) {
  event.preventDefault();
  
  var input = $('#color-field').val();
  $('.brush').css("background-color", input );
})
