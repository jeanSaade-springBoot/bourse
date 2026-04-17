function signIn() {
    let dataParam = {
        "userName": $('#username').val(),
        "password": $('#password').val()
    };

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/auth/signin",
        data: JSON.stringify(dataParam),
        dataType: 'json',
        success: function(data) {
            if (!data.tacAccepted) {
                window.location.href = '/termsandconditionsconfirmation';
            } else {
                window.location.href = '/';
            }
        },
        error: function(e) {
            $("#ErrorMessage").show().html(e.responseJSON.message);
        }
    });
}

// Click
$("#signIn").click(signIn);

// Enter
$('#username, #password').on('keypress', function (e) {
    if (e.which === 13) {
        signIn();
    }
});