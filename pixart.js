
$('#form').submit(function(event){
  event.preventDefault();
  var input = $('#color-field').val();
  $('.brush').css('backgroundColor',input);
});