var $btn = $('#set-color');
var $box = $('.brush');
var $color = $('#color-field');

var changeColor = function(){
  $box.css("background", "$color");
}
$btn.on("click", changeColor());
$color.on("submit", changeColor());

for (i=0; i<20; i++){
  $('body').append('<div class="square">');
  $square = $('.square')
  $square.on("mouseover", function(){
    $square.css("background", "$color" )
  });
}


//
// var changeColor = function(event){
//   event.preventDefault();
//   $box.css("background", "$color");
// }
