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
