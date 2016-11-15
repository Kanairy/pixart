//change colour from user input

$("#set-color").on('click', function(event) {
  event.preventDefault();
  console.log('hello');

  var $input = $('#color-field').val();
  $('.brush').css({'background-color': $input});

});

//change on enter key

$('#color-field').keypress(function(enter){
        if(enter.which == 13){    //Enter key pressed
            $('#searchButton').click();//Trigger search button click event
        }
    });

// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()


for (var i = 0; i <= 20; i++){
  var $div = $('<div>').addClass("square");
  $('.main').append($div);
}
