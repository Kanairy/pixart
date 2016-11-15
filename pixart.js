




$( document ).ready(function() {


    function changeColor() {
        inputValue = $("#color-field").val();
        $('.brush').css("background", inputValue);
    }

    // $("#color-field").onEnter( function() {
    //     $(this).val("Enter key pressed");                
    // });

    $("#set-color").on("click", changeColor);   

});