//Scroll to Top Plugin

$(document).ready(function () {
    $.goup();


//Add Title under Resume Header

    $('img').hover(function () {
        $('h2').append('<div>Web Designer</div>');
    }, function () {
        $('h2').children().first().remove();
    });

//Contact Info switches to Email Only

    $('.contact').find('h3').hover(function () {
        $('.contact').html('<div><h3><a href="mailto:email@email.com">EMAIL ME</a></h3></div>');
    });

});
