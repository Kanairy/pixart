$(document).ready(function() {

  var $body = document.body;

  // Commmit 1 & 2
  var $button = $('#set-color');

  $button.on('click', function(event) {
    event.preventDefault();

    var color = $('#color-field').val();
    var $brushBox = $('.brush');

    $brushBox.css("background-color", color);
  });

  // Commit 3
  var totalDivs = 20;

  for (var i = 0; i < totalDivs; i++) {
    $('body').append('<div class="square"></div>');
  }

});
