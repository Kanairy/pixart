var brushStatus = 'color'

var makeSquares = function(){
  for (var i = 0; i < 5000; i++) {
    var $square = $('<div>').addClass('square');
    $('body').append($square);
  }
}();

$('#set-color').click(event => {
  event.preventDefault()
  var input = $('#color-field').val();

  $('.brush')
  .css({
    "background-color" : input,
    'background-image' : 'none'
  });
  $('#color-field').val('');
  brushStatus = 'color'
})

$('.square').hover(event => {
  var brush = $('.brush').css("background-" + brushStatus)
  $(event.target).css( "background-" + brushStatus, brush)
})


$('#set-stamp').click(event => {
  event.preventDefault()
  var stampInput = $('#stamp-field').val();

  $.ajax({
    url: 'http://www.omdbapi.com/',
    data: { s: stampInput }
  })
  .done(response => {
    var poster = response.Search[0].Poster
    $('.brush').css({
      "background-color" : 'none',
      'background-image' : 'url("' + poster + '")'
    });
      $('#stamp-field').val('');
      brushStatus = 'image'
    });

})
