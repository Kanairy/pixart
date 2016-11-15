$('#set-color').click(event, function() {
  event.preventDefault();

  // Uncomfortable with the fact that I can't do anything about checking if it's an invalid color or not
  var color = $("#color-field").val();

  $(".brush").css("background", color)
})
