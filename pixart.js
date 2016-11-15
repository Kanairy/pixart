var $setColor = $('#set-color');
var $boxColor = $('.brush');
var $colorField = $('#color-field');

// setColor.addEventListener("click", function() {
//   brush.style.background = colorInput.value;
// });
//
// colorField.addEventListener('enter', function(event) {
//   var colorField = document.getElementById('color-field');
//   boxColor.backgroundColor = colorField;
// });
// Set Color to change the color of brush box in input field
$('#form').submit(function(event) {
  event.preventDefault();
  $boxColor.css('background-color', $colorField.val());
});

// Create 20 divs of square class and append them to body
for(var i = 0; i < 200; i++) {
  $('body').append($('<div>').addClass('square'));
}

// Click squares changes color to green when clicked
// $('.square').click(function(event) {
//   $(event.target).css('backgroundColor', 'green');
// });

// Click squares changes color to input color
// $('.square').click(function(event) {
//   var input = $('#color-field').val();
//   $(event.target).css('backgroundColor', input);
// });

// mouseover changes color to input color
$('.square').mouseover(function(event) {
  var input = $('#color-field').val();
  $(event.target).css('backgroundColor', input);
});

// stamp tool
$('#form2').submit(function(event) {
  event.preventDefault();
  imgUrl = $('#img-btn').val();

});
