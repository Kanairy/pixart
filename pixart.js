
$('#set-color').on('click', function(event) {
  event.preventDefault();
  
  var input = $('#color-field').val();

  $('.brush').css("background-color", input );
})
