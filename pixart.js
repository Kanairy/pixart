$('#set-color').on('click',function(event) {
  event.preventDefault();
  //change div class background
  var color = $('#color-field').val()
  $('.brush').css("background",color);
})
