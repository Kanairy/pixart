$(document).ready(function(){
  var $setColorBtn = $("#set-color");
  var $brushBox = $(".brush");

  // COMMIT 1 & 2: Change color on button also
  // works on enter from within input field as
  // it's in a form an enter triggers the submit
  // buttons click which is captured here
  $setColorBtn.on("click", function(e) {
    e.preventDefault();
    $brushBox.css({"background-color": "#"+$("#color-field").val()})
  })

  // COMMIT 3
  for (var i = 0; i < 20; i++) {
    $("<div>", { class: "square" }).appendTo("body");
  }

  // COMMIT 4
  // $("body").on("click", ".square", function(e) {
  //   $(e.target).css({ "background-color": "green" });
  // });

  //COMMIT 5
  // $("body").on("click", ".square", function(e) {
  //   $(e.target).css({ "background-color": "#"+$("#color-field").val() });
  // });

  //COMMIT 6
  $("body").on("mouseover", ".square", function(e) {
    $(e.target).css({ "background-color": "#"+$("#color-field").val() });
  });
});
