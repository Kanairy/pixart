$('#set-color').on('click', function(event) {
  event.preventDefault();
  var color = $('#color-field').val();
  // document.getElementByClass('brush').style.background = color;
  $('.brush').css("background", color);
})
