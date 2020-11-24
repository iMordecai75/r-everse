//**** STAND
 function checkInputEmail(field_id) {
    var field_value = $("#" + field_id).val();
    if (/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(field_value)) {
        $("#" + field_id).removeClass("error-field");
        $("#" + field_id).addClass("ok-field");
        return true;
    } else {
        $("#" + field_id).removeClass("ok-field");
        $("#" + field_id).addClass("error-field");
        $("#" + field_id).focus();
        return false;
    }
}

function checkInputText(field_id) {
    var field_value = $("#" + field_id).val();
    if (field_value == "") {
        $("#" + field_id).removeClass("ok-field");
        $("#" + field_id).addClass("error-field");
        $("#" + field_id).focus();
        return false;
    } else {
        $("#" + field_id).addClass("ok-field");
        $("#" + field_id).removeClass("error-field");
        return true;
    }
}

function checkInputCheckBox(field_id) {
    if (!$("#" + field_id).is(':checked')) {
        $("#" + field_id + "_text").removeClass("ok-field-text");
        $("#" + field_id + "_text").addClass("error-field-text");
        $("#" + field_id).addClass("error-field");
        $("#" + field_id).focus();
        return false;
    } else {
        $("#" + field_id + "_text").addClass("ok-field-text");
        $("#" + field_id + "_text").removeClass("error-field-text");
        return true;
    }
}

function checkInputNumber(field_id) {
    var field_value = $("#" + field_id).val();
    if (field_value == "0") {
        $("#" + field_id).removeClass("ok-field");
        $("#" + field_id).addClass("error-field");
        $("#" + field_id).focus();
        return false;
    } else {
        $("#" + field_id).addClass("ok-field");
        $("#" + field_id).removeClass("error-field");
        return true;
    }
}

//GENERAL CHECK
function isInt(value) {
    var er = /^-?[0-9]+$/;
    return er.test(value);
}

var base_url = 'https://www.moneycontroller.it';

function loginFromContact() {
    $("#request_login_email").removeClass("error");
    $("#request_login_password").removeClass("error");
    var u_mail = $("#request_login_email").val();
    var u_password = $("#request_login_password").val();
    $.post(base_url + "/lib/manage-utenti.php", {
        op_type: 'login',
        u_mail: u_mail,
        u_password: u_password
    }, function (data) {
        if (data > 0) {
            location.reload();
        } else {
            $("#request_login_email").val("").focus();
            $("#request_login_password").val("");
            $("#request_login_email").addClass("error");
            $("#request_login_password").addClass("error");
        }
    });
}