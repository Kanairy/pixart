var $btn = $('.set-color');
var $box = $('#brush');
var $color = $('.color-field');

var changeColor = function(event){
  event.preventDefault();
  $box.css("background-color","$color");

}
$btn.on("click", changeColor(event));
$color.on("submit", changeColor(event));
