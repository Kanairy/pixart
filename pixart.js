
$('#set-color').on('click', function(event) {
  event.preventDefault();
  var newColor = $('#color-field').val()
  $('.brush').css('background-color', newColor);
})
