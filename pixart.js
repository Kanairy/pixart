var setColor = document.getElementById('set-color');
var boxColor = document.getElementsByClassName('brush');
var brush = document.querySelector("div.brush");
var colorField = document.getElementById('color-field');
var body = document.querySelector("body");

setColor.addEventListener("click", function() {
  brush.style.background = colorInput.value;
});

colorField.addEventListener('enter', function(event) {
  var colorField = document.getElementById('color-field');
  boxColor.backgroundColor = colorField;
});

for(var i = 0; i < 20; i++) {
  var div = document.createElement("div");
  div.className = "square";
  body.appendChild(div);
}

var squares = document.querySelectorAll("div.square");

squares.addEventListener('click', function(event) {
  event.target.style.backgroundColor = colorField;
});

body.addEventListener('mouseover', function(eventObject) {
  if (eventObject.target.className === "square") {
    eventObject.target.style.backgroundColor = input.value;
  }
});
