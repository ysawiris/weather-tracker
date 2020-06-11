$(document).ready(function() {
    $('#zipcode').on('click', function() {
        var zipcode = $('#code').val()
        console.log(zipcode)

        if (zipcode) {
            alert("You will now be redirected.");
            window.location.pathname = `/tracker/${zipcode}`;
        }
    })
})