$(function() {
    $('#signinButton').click(function(){
        $("#signinModal").modal('toggle');
    });
});

$(function() {
    $('#signinDDown').click(function(){
        $("#signinModal").modal('toggle');
    });
});

$(function() {
    $('#connectButton').click(function(){
        $("#connectModal").modal('toggle');
    });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

