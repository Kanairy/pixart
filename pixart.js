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

for (var i = 0; i <= 100; i++){
  var $div = $('<div>').addClass("square");
  $('.main').append($div);
}

//Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
//Hint: either add the event listener while creating the squares, or listen for events on the body element

$('.square').click(function() {
     $(this).css({'background-color': 'green'});
  });

// Modify your code so that when I click on each "square",
// it changes to the color I set using my input instead of "green" every time.

$('.square').click(function() {
    var $input = $('#color-field').val();
     $(this).css({'background-color': $input});
  });

// Change the event that changes your box colors from 'click' to 'mouseover'

$('.square').mouseover(function() {
    var $input = $('#color-field').val();
     $(this).css({'background-color': $input});
  });

// Add a new tool to your program, the 'stamp' tool.
// The user should be able to pick either the paint tool (the one you already built in previous steps), or the new stamp tool.

$('.square').mouseover(function() {
    var $source = $('#url-field').val()
    var $url = 'url(' + $source + ')'
    $(this).css({'background-image': $url, 'background-size': '70px' });
  });

//change image box to url if button clicked

$("#set-url").on('click', function(event) {
  event.preventDefault();
  var $source = $('#url-field').val()
  var $url = 'url(' + $source + ')'
  $('.image').css({'background-image': $url,  'background-size': '70px' });
});
