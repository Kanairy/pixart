
$('#set-color').click(function(event){
  event.preventDefault()
  var input = $('#color-field').val();

  $('.brush').css(
    "background-color", input)
})

var makeSquares = function(){
  for (var i = 0; i < 20; i++) {
    var $square = $('<div>').addClass('square');
    $('body').append($square);
  }
}();
