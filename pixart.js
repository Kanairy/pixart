function setColor(event){
  event.preventDefault();
  var color = $("#color-field").val();
  var $box = $($('.brush')[0]);
  $box.css("background-color", color)
}
$('#set-color').on("click", setColor);

function checkKeypress(event){
  if (event.keyCode == 13){
    $('#set-color').click();
  }
}
$('#color-field').on("keypress", checkKeypress);

function colorSquare(event){
  var $square = $(event.target);
  var color = $($('.brush')[0]).css("background-color");
  $square.css("background-color", color)
}

(function(){
  for (var i = 0; i < 20; i++){
    var $square = $('<div class="square">');
    $('body').append($square);
  }
  $('.square').on("mouseover", colorSquare);
})();
