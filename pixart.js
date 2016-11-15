
$('#set-color').click (function(event){
  event.preventDefault();
  console.log(event.target)
  var input = $('#color-field').val();
  $(".brush").css("background-color", input)
})

// The same thing should happen when I press the enter key from inside the input field
