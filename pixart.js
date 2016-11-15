function setColor(event){
  event.preventDefault()
  var color = $("#color-field").val();
  var $box = $($('.brush')[0]);
  $box.css("background-color", color)
}
$('#set-color').on("click", setColor);
