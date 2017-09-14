$("document").ready(function () {

    //ZenScroll
    $("#linkToTop").click(function () {
        zenscroll.toY(30);
    });
    //Expanding divs
    $("#dTireRep, #dPunctureRep, #dBalancing").click(function () {
        ShowServAbout(1)
    });
    $("#dAlloyWheels, #dWheels, #dWheelStore").click(function () {
        ShowServAbout(2)
    });

    //carousel slick

    //$('#carousel-images').slick({
    //    arrows: true,
    //    autoplay: true,
    //    autoplaySpeed: 1000,
    //});
});


//FUNCTIONS
function ShowServAbout(num) {
    var aboutSelector = "#dServAbou" + num;
    $(aboutSelector).toggle(300);


    if ($(aboutSelector).css('display') === 'none') {
        scrollTop: $(aboutSelector).offset().top
    }


}





//DEPRECATED

//dissapperaing nav - used in document ready

    // var lastScrollTop = 0;
    //$(window).scroll(function (event) {
    //    var st = $(this).scrollTop();
    //    if (st > 30) {
    //        $("#topNavbar").css("height",30);
    //    } else {
    //        $("#topNavbar").css("height", 30);
    //    }
    //    //lastScrollTop = st;
    //});