
$('#set-color').on('click', function(event) {
  event.preventDefault();
  var newColor = $('#color-field').val()
  $('.brush').css('background-color', newColor);
})


for (var i = 0; i < 20; i++) {
  $('body').append($('<div>').addClass('square'));
}

$('.square').on('mouseover', function(event) {
  var brushColor = $('.brush').css('background-color')
  $(event.target).css('background-color', brushColor);
})
