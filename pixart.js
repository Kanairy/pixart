//COMMIT 1
//add functionality to change color on button click
$('#set-color').on('click',function(event) {
  event.preventDefault();
  //change div class background
  var color = $('#color-field').val()
  $('.brush').css("background",color);
})

//COMMIT 2
//add functionality to change color on keypress
$('#set-color').on('keypress',function(event) {
  event.preventDefault();
  if(event.which === 13) {
    var color = $('#color-field').val()
    $('.brush').css("background",color);
  }
})

//COMMIT 3
//create and append 20 divs of the "square" class to the body
var squares = '<div class="square"/>';
var body = $('body');

for (i = 0; i < 20; i++) {
  body.append($(squares))
}

//COMMIT 4
//click on each square
$('.square').on('click',function(event) {
  $(event.target).css("background","green")
  //change div class background

})

//COMMIT 5
//change color to input color

$('.square').on('click',function(event) {
  var color = $('#color-field').val()
  $(event.target).css("background",color)
  //change div class background
})
