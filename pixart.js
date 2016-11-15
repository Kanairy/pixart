var selected = "";
var color = "";
var img_url = "";

for (var i=0; i<2000; i++) {
  $square = $('<div>').addClass('square');
  $('.canvas').append($square);
}

$('#form').submit(function(event){
  event.preventDefault();
  color = $('#color-field').val();
  $('.brush').css('backgroundColor', color);
  $('.brush').css('backgroundImage', '');
  selected = "color";
});

$('#form-2').submit(function(event){
  event.preventDefault();
  img_url = $('#img-url-field').val();
  $('.brush').css('backgroundImage', 'url(' + img_url + ')');
  selected = "img_url";
});

$('.square').mouseover(function(event) {
  if (selected === "color") {
    $(event.target).css('backgroundColor', color);
  }
  else if (selected === "img_url") {
    $(event.target).css('backgroundImage', 'url(' + img_url + ')');
  }
});