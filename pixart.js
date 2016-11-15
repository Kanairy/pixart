

$('#set-color').on('click', function(event) {
  event.preventDefault();
  var newColor = $('#color-field').val()
  $('.brush').css('background-color', newColor);
});


for (var i = 0; i < 2000; i++) {
  $('body').append($('<div>').addClass('square'));
}

$('.square').on('mouseover', function(event) {
  var tool = $('#tool').find(':selected').val();

  if (tool === 'brush') {
    var brushColor = $('.brush').css('background-color')
    $(event.target).css('background-color', brushColor);
    $(event.target).css('background-image', 'none');
  } else {
    var stampImage = $('.stamp').css('background-image');
    $(event.target).css('background', stampImage);
    $(event.target).css('background-size', '100% 100%');
  }
});

$('#set-image').on('click', function(event) {
  event.preventDefault();
  var imgUrl = $('#image-url').val();
  $('.stamp').css('background', 'url(' + imgUrl + ')');
  $('.stamp').css('background-size', '100% 100%');
});
