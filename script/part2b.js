
$(document).ready(function() {
    $('.requirements, .bio ').hide();
    $('#btnDescription').click(function() {
        $('.description').slideDown('fast');
        $('.requirements, .bio').hide();
    });
    $('#btnRequirements').click(function() {
        $('.requirements').slideDown('fast');
        $('.description, .bio ').hide();
    });
    $('#btnBio').click(function() {
        $('.bio').slideDown('fast');
        $('.description, .requirements').hide();
    });
    
});

