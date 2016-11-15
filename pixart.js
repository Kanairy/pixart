//commit 1
$('#set-color').on('click', function(event) {
  event.preventDefault();
  var color = $('#color-field').val();
  $('.brush').css("background", color);
})

//commit 2
$('color-field').bind("enterKey",function(event){
  event.preventDefault();
  var color = $('#color-field').val();
  $('.brush').css("background", color);
});

// commit 3

var create20Divs = function() {
  for (var i = 0; i < 20; i++) {
    $('.controls').append( $('<div>',{class: 'square'}) );
  }
};
create20Divs();

// commit 4
$('.square').on('click', function(event) {
  $(this).css("background", 'green');
});

//commit 5
$('.square').on('click', function(event) {
  var color = $('#color-field').val();
  $(this).css("background", color);
});
