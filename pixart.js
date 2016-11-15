// Commit 1. Spent a bit too much time digging up the code necessary. I need to familiarise myself with jquery a bit more.
$('#set-color').click(event, function() {
  event.preventDefault();

  // Uncomfortable with the fact that I can't do anything about checking if it's an invalid color or not. Thankfully the browser remembers the old one and doesn't scream error messages
  var color = $("#color-field").val();

  $(".brush").css("background", color)
})

// For some reason, Commit 2 automatically works? I presume it has something to do with how the input behaves in a form with a button...

// Commit 3. Fairly easy. Somewhat uncomfortable with normal js code in the middle of a bunch of jquery code and from the fact that I have a OOP mindset.
for (var i = 0; i < 20; i++) {
  $("body").append("<div class=square></div>")
}

// Commit 4. Spen way too much time on this. I should really focus on making the code work, then thinking if it's good coding practise.
// $('.square').click(function() {
//   $(this).css("background", 'green')
// })

// Commit 5. It's ugly, but it works.
// $('.square').click(function() {
//   $(this).css("background", $(".brush").css("background"))
// })

// Commit 6. I'm sure you realise that it's just copy and paste from Commit 5 with a single method change. Not sure about the whole pixel business, because they are already 10px by 10px with 0 margin. Great testing guys.
$('.square').mouseover(function() {
  $(this).css("background", $(".brush").css("background"))
})
