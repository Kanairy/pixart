




$( document ).ready(function() {


    function changeColor() {
        inputValue = $("#color-field").val();
        $('.brush').css("background", inputValue);
    }

   $('#color-field').on('keypress', function (e) {
         if(e.which === 13){
           changeColor();
         }
   });

    $("#set-color").on("click", changeColor);   

});