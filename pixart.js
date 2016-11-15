$('#set-color').on('click',function(event) {
  event.preventDefault();
  //change div class background
  var color = $('#color-field').val()
  $('.brush').css("background",color);
})

$('#set-color').on('keypress',function(event) {
  event.preventDefault();
  if(event.which === 13) {
    var color = $('#color-field').val()
    $('.brush').css("background",color);
  }
})
