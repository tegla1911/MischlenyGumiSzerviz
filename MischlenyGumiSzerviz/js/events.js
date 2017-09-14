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
        ShowServAbout(1)
    });
    $("#dAlloyWheels, #dWheels, #dWheelStore").click(function () {
        ShowServAbout(2)
    });

});

function ShowServAbout(num) {
    var aboutSelector = "#dServAbou" + num;
    $(aboutSelector).toggle(300);


    if ($(aboutSelector).css('display') == 'none') {
        scrollTop: $(aboutSelector).offset().top
    }


}