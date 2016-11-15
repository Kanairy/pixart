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
