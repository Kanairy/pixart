
$('#form').submit(function(event){
  event.preventDefault();
  var input = $('#color-field').val();
  $('.brush').css('backgroundColor',input);
});

for (var i=0; i<20; i++) {
  $square = $('<div>').addClass('square');
  $('body').append($square);
}

$('.square').click(function(event) {
  var input = $('#color-field').val();
  $(event.target).css('backgroundColor', input);
});