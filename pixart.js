$(document).ready(function() {

  var $button = $('#set-color');

  $button.on('click', function(event) {
    event.preventDefault();

    var color = $('#color-field').val();
    var $brushBox = $('.brush');

    $brushBox.css("background-color", color);
  });

});
