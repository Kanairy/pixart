var mode = "paint";

//Keypress events for input fields
function checkKeypress(event){
  if (event.keyCode == 13){
    if (event.target.id === "color-field"){
      $('#set-color').click();
    } else {
      $('#set-stamp').click();
    }
  }
}
$('#color-field').on("keypress", checkKeypress);
$('#stamp-field').on("keypress", checkKeypress);

//Paint modes
function setColor(event){
  event.preventDefault();
  mode = "paint";
  var color = $("#color-field").val();
  var $box = $($('.brush')[0]);
  $box.css("background-color", color)
}
$('#set-color').on("click", setColor);

//Stamp modes
function setStamp(event){
  event.preventDefault();
  mode = "stamp";
  var image = $("#stamp-field").val();
  var $box = $($('.stamp')[0]);
  $box.empty().append( $('<img>',{src: image}) );
}
$('#set-stamp').on("click", setStamp);

//Modify squares
function colorSquare(event){
  var $square = $(event.target);
  var color = $($('.brush')[0]).css("background-color");
  $square.css("background-color", color);
}

function stampSquare(event){
  var $square = $(event.target);
  var image = $($($('.stamp')[0]).children()[0]).clone();
  $square.append(image);
}

function fillSquare(event){
  $(event.target).empty();
  $(event.target).css("background-color", "transparent");
  if (mode === "paint"){
    colorSquare(event);
  } else {
    stampSquare(event);
  }
}

(function(){
  for (var i = 0; i < 20; i++){
    var $square = $('<div class="square">');
    $('body').append($square);
  }
  $('.square').on("mouseover", fillSquare);
})();
