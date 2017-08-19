$("document").ready(function () {


    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $("#topNavbar").hide(300);
        } else {
            $("#topNavbar").show(300);
        }
        lastScrollTop = st;
    });
    $("#linkToTop").click(function () {
        zenscroll.toY(30);
    });

    $("#dTireRep, #dPunctureRep, #dBalancing").click(function () {
        setTimeout(function () { ShowServAbout("dTireRep",1)
    });

});

function ShowServAbout(caller, num) {
    var aboutSelector = "#dServAbou" + num;
    $(aboutSelector).toggle(300);


        if ($(aboutSelector).css('display') == 'none') {
            $('html, body').animate({
                scrollTop: $(aboutSelector).offset().top
            }, 1000)
        }
    }, 500);
}