$(document).ready(function() {
    $('#zipcode').on('click', function() {
        var zipcode = $('#code').val()
        console.log(zipcode)

        if (zipcode) {
            window.location.pathname = `/tracker/${zipcode}`;
        }
    })
})