$(document).ready(function() {
  $('#set-color').click(function(e) {
    e.preventDefault();
    brush_color = $('#color-field').val();
    $('.brush').css('background-color', brush_color);
  })
});
