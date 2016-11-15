
$('#set-color').click (function(event){
  event.preventDefault();
  console.log(event.target)
  var input = $('#color-field').val();
  $(".brush").css("background-color", input)
})

// The same thing should happen when I press the enter key from inside the input field



$( "#set-color" ).keypress(function(event) {
  event.preventDefault();
  var input = $('#color-field').val();
  $(".brush").css("background-color", input);
});

// * Create 20 divs of the "square" class and append them to the body
//   * **Hint**: use `.append()`

$(document).ready(function () {
    var $newdiv;
    for (var i = 0; i < 21; i++) {
        $newdiv = $('<div class="brush" />')
        $('body').append($newdiv);
        $newdiv.click (function(event){
          event.preventDefault();
          var input = $('#color-field').val();
          $(event.target).css("background-color", input);
        })
    }
});

// * Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
