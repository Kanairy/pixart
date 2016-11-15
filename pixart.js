var $btn = $('.set-color');
var $box = $('#brush');
var $color = $('.color-field');

$btn.on("click", function(event){
  event.preventDefault();
  $box.css("background-color","$color");

});
