var setColor = document.getElementById('set-color');
var boxColor = document.getElementsByClassName('brush');

setColor.addEventListener('click', function(event) {
  var colorField = document.getElementById('color-field');
  boxColor.backgroundColor = colorField;
});
