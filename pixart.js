$(document).ready(function(){
  var $setColorBtn = $("#set-color");
  var $brushBox = $(".brush");

  $setColorBtn.on("click", function(e) {
    e.preventDefault();
    $brushBox.css({"background-color": "#"+$("#color-field").val()})
  })
});
