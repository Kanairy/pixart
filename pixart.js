$(document).ready(function() {

  var $body = document.body;

  // Commmit 1 & 2
  var $setColorBtn = $('#set-color');

  $setColorBtn.on('click', function(event) {
    event.preventDefault();

    var color = $('#color-field').val();
    var $brushBox = $('.brush');

    $brushBox.css('background-color', color);
  });

  // Commit 3
  var totalDivs = 2000;

  for (var i = 0; i < totalDivs; i++) {
    $('body').append('<div class="square"></div>');
  }

  // Commit 4, 5, 6, 7

  var $paintBtn = $('#paint-btn');

  $paintBtn.on('click', function(event) {
    event.preventDefault();

    var $squares = $('.square');

    $squares.mouseover(function() {
      var color = $('#color-field').val();
      $(this).css('background-color', color);
    });
  });

  var $stampBtn = $('#stamp-btn');

  $stampBtn.on('click', function(event) {
    event.preventDefault();

    var title = $('input').val();

    var options = {
      url: 'http://omdbapi.com/',
      method: 'get',
      data: { t: title }
    };

    $.ajax(options).done(function(response) {
      var poster = response.Poster;
      console.log(poster);

      var $squares = $('.square');
      $squares.mouseover(function() {
        var color = $('#color-field').val();
        $(this).css('background', 'url(' + poster + ')');
      });
    });

  });

});
