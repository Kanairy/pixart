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

// create 20 square class divs
for (var i=0; i<20; i++) {
    $("body").append("<div class='square'></div>");
};

$(document).ready(function() {
  $('body').click(function(e) {
    e.preventDefault();
    $( e.target ).closest('.square').css('background-color', 'green');
  });
});
