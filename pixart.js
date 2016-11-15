
var $colourInput = $('#color-field');
var $brush = $('.brush');
var $setColBtn = $('#set-color');

var changeBrush = function(){

  $setColBtn.on('click', function(e){

    var $input = $colourInput.val();
    $brush.setAttribute.style.backgroundColor = "#D93600";

  });
};

document.getElementById("set-color").addEventListener("click", function(event){
    event.preventDefault()
});
