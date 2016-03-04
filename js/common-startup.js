/**
 * Created by Cezar on 1/19/2016.
 */



$(function() {

    // This shows how to include another html
    var $includedLoginForm = $("#includedLoginForm");
    if ( $includedLoginForm ) {
        $("#includedLoginForm").load("login-form.html");
    }

    $(".pop-image").click(function(evt){
        var $img = $(this).find('img').first();
        if ( $img ) {
            var imgPath = $img.attr('src');
            var imgCaption = $img.attr('alt');
            if (imgPath) {
                $('#imagepreview').attr('src', imgPath);
                $('#imagemodal').modal('show');
                $('#myModalLabel').text(imgCaption);
            }
        }
    });

});