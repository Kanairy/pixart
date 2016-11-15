var setColor = document.getElementById('set-color');
var boxColor = document.getElementsByClassName('brush');

setColor.addEventListener('click', function(event) {
  var colorField = document.getElementById('color-field');
  boxColor.backgroundColor = colorField;
});

setColor.addEventListener('enter', function(event) {
  var colorField = document.getElementById('color-field');
  boxColor.backgroundColor = colorField;
});


var board = function() {
  for(var i = 0; i < 20; i++){
    var div = document.createElement("div");
    div.className = "square";
    document.body.appendChild(div);
  }
};

board.addEventListener('click', function(event) {
  event.target.style.backgroundColor = green;
});
