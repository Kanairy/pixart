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

// change individual to green and now brush_color / now mouseover
$(document).ready(function() {
  $('body').mouseover(function(e) {
    e.preventDefault();
    $( e.target ).closest('.square').css('background-color', brush_color);
  });
});
