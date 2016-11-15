$(document).ready(function() {
  $('#set-color').click(function(e) {
    e.preventDefault();
    
    // change color on button press
    brush_color = $('#color-field').val();
    $('.brush').css('background-color', brush_color);
  })

  // change color on enter
  $('#color-field').keypress(function (e) {
  if (e.which == 13) {
    $('#set-color').submit();
  }
  });
});
