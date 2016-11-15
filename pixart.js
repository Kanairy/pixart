var $btn = $('#set-color');
var $box = $('.brush');
var $color = $('#color-field');

var changeColor = function(event){
  event.preventDefault();
  $box.css("background", "$color");
}
$btn.on("click", changeColor(event));
$color.on("submit", changeColor(event));

for (i=0; i<20; i++){
  $('body').append('<div class="square">');
  $square = $('.square')
  $square.on("click", function(){
    $square.css("background", "$color" )
  });
}
