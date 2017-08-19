$("document").ready(function () {

    $(document).on('','')

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

    $("#svgTireChange").click(function () {
        ShowServAbout("dTireRep",1)
    });

});

function ShowServAbout(caller,num) {
    $("#dServAbou1").toggle(300);
}