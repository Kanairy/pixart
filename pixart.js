
var $colourInput = $('#color-field');
var $brush = $('.brush');
var $setColBtn = $('#set-color');

var changeBrush = function(){

  $setColBtn.on('click', function(){

    var $input = $colourInput.val();

    $brush.setAttribute.style.backgroundColor = "#D93600";

  });
};

addEventListener("click", function(event){
    event.preventDefault()
});
