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
// create20Divs();

// commit 4
$('.square').on('click', function(event) {
  $(this).css("background", 'green');
});

//commit 5
$('.square').on('click', function(event) {
  var color = $('#color-field').val();
  $(this).css("background", color);
});

// commit 6
$('.square').on('mouseover', function(event) {
  var color = $('#color-field').val();
  $(this).css("background", color);
});

//commit 7
var createDivs = function() {
  for (var i = 0; i < 304; i++) {
    $('.draw').append( $('<div>',{class: 'square'}) );
  }
};
createDivs();

$('#set-img').on('click', function(event) {
  event.preventDefault();
  var img = $('#img-field').val();
  $('.brush').css("background", "url("+img+")");
})
$('.square').on('mouseover', function(event) {
  var img = $('#img-field').val();
  $(this).css("background", "url("+img+")");
});
