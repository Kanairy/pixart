$("#set-color").on('click', function(event) {
  event.preventDefault();
  console.log('hello');

  var $input = $('#color-field').val();
  $('.brush').css({'background-color': $input});

});
