$(document).ready(function () {
    var menuHeight = $('.navbar').height();
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top //- menuHeight
                    }, 500, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    $(window).scroll(function () {
        /*var offset_t = $("#retailers").offset().top - $(window).scrollTop();
        if (offset_t<100){
          $('.navbar').addClass('bg-dark');
        }
        else {
          $('.navbar').removeClass('bg-dark');
        }*/
        if ($(window).scrollTop() > 100) {
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark');
        }
    });
    if ($('.fl-toggle-btn').length) {
        $('.fl-toggle-btn').click(function () {
            $('.fl-toggle-btn').toggleClass('active');
            $('.fl-how-diagram .row').toggleClass('active');
        });

    };
});
