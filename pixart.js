var input = $('#color-field').val();
var stampInput = $('#stamp-field').val();


$('#set-color').click(function(event){
  event.preventDefault()
  $('.brush').css(
    "background-color", input)
})

var makeSquares = function(){
  for (var i = 0; i < 5000; i++) {
    var $square = $('<div>').addClass('square');
    $('body').append($square);
  }
}();

$('.square').hover(function(event){
  var brush = $('.brush').css(
    "background-color")
  $(event.target).css( "background-color", brush)
})

$('#set-stamp').click(function(event){
  event.preventDefault()
  $.ajax({
    url: 'http://www.omdbapi.com/',
    data: { i: stampInput }
  }).done(function(response){
    console.log('received');
    var movie = response;

    $('.brush').css(
      "background-image", 'image(' + movie.Poster + ')')

    });

})
