/**
 * Created by Cezar on 1/19/2016.
 */

// This shows how to include another html
var $includedLoginForm = $("#includedLoginForm");
if ( $includedLoginForm ) {
    $("#includedLoginForm").load("login-form.html");
}
