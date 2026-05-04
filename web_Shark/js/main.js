// --------------------------------
// --------------------------------
// ------banner的mousemove---------
// --------------------------------
// --------------------------------
if ($(window).width() > 768) {
    let cube = $(".banner");
    let boundingBox = cube[0].getBoundingClientRect();
    let centerX = boundingBox.left + boundingBox.width / 2;
    let centerY = boundingBox.top + boundingBox.height / 2;
    $(".banner").mousemove(function (e) {
        let { pageX, pageY } = e;
        let [distanceX, distanceY] = [centerX - pageX, centerY - pageY];
        $(".bg-txt01").css({
            "transform": `translateX(${distanceX / 25}px) 
        translateY(${distanceY / 25}px)`
        });
        $(".bg-txt02").css({
            "transform": `translateX(${distanceX / 20}px) 
        translateY(${distanceY / 20}px)`
        });
    });
}

// --------------------------------
// --------------------------------
// -------裝備資訊的hover----------
// --------------------------------
// --------------------------------
$(".info-btn a:nth-child(1) img").hover(function () {
    $('.eqs').load('../eq1.html');
    $(this).attr('src', 'images/info-btn-h.png');
    $(".eqs").show();
    // $(".eq-img>img").attr('src', 'images/eq01.png');
    // $(".eq-name>p").text("面鏡");
}, function () {
    $(this).attr('src', 'images/info-btn.png');
    $(".eqs").hide();
});

$(".info-btn a:nth-child(2) img").hover(function () {
    // $('.eqs').load('../eq2.html');
    $(this).attr('src', 'images/info-btn-h.png');
    $(".eqs").show();
    $(".eq-img>img").attr('src', 'images/eq02.png');
    $(".eq-name>p").text("呼吸管");
}, function () {
    $(this).attr('src', 'images/info-btn.png');
    $(".eqs").hide();
});

$(".info-btn a:nth-child(3) img").hover(function () {
    // $('.eqs').load('../eq3.html');
    $(this).attr('src', 'images/info-btn-h.png');
    $(".eqs").show();
    $(".eq-img>img").attr('src', 'images/eq03.png');
    $(".eq-name>p").text("長蛙鞋");
}, function () {
    $(this).attr('src', 'images/info-btn.png');
    $(".eqs").hide();
});


// --------------------------------
// --------------------------------
// -------------faq的js------------
// --------------------------------
// --------------------------------
$(".faq5>.faq").click(function () {
    // 找this 的其他兄弟，並slideUp()
    $(this).siblings().find(".content").slideUp();
    $(this).siblings().find(".content").removeClass("active");

    $("i").removeClass("fas fa-chevron-up");
    $(this).siblings().find("i").addClass("fas fa-chevron-down");

    if ($(this).find(".content").hasClass("active")) {
        $(this).find(".content").removeClass("active");
        $(this).find(".content").slideUp();
        $(this).find("i").removeClass("fas fa-chevron-up");
        $(this).find("i").addClass("fas fa-chevron-down");
    } else {
        $(this).find(".content").addClass("active");
        $(this).find(".content").slideDown();
        $(this).find("i").removeClass("fas fa-chevron-down");
        $(this).find("i").addClass("fas fa-chevron-up");
    }
});


// --------------------------------
// --------------------------------
// fixed 定位聯絡與追蹤資訊的hover
// --------------------------------
// --------------------------------
$(".follow-menu>.icon>a:nth-child(1) img").hover(function () {
    $(this).attr('src', 'images/follow-us-h01.png');
}, function () {
    $(this).attr('src', 'images/follow-us-w-01.png');
});

$(".follow-menu>.icon a:nth-child(2) img").hover(function () {
    $(this).attr('src', 'images/follow-us-h02.png');
}, function () {
    $(this).attr('src', 'images/follow-us-w-02.png');
});

$(".follow-menu>.icon a:nth-child(3) img").hover(function () {
    $(this).attr('src', 'images/follow-us-h03.png');
}, function () {
    $(this).attr('src', 'images/follow-us-w-03.png');
});


$(".address-menu>.icon>a img").hover(function () {
    $(this).attr('src', 'images/address-h01.png');
}, function () {
    $(this).attr('src', 'images/address-w01.png');
});

// --------------------------------
// --------------------------------
// fotter 定位聯絡與追蹤資訊的hover
// --------------------------------
// --------------------------------
$(".follow-us>.icon>a:nth-child(1) img").hover(function () {
    $(this).attr('src', 'images/follow-us-h01.png');
}, function () {
    $(this).attr('src', 'images/follow-us01.png');
});

$(".follow-us>.icon a:nth-child(2) img").hover(function () {
    $(this).attr('src', 'images/follow-us-h02.png');
}, function () {
    $(this).attr('src', 'images/follow-us02.png');
});

$(".follow-us>.icon a:nth-child(3) img").hover(function () {
    $(this).attr('src', 'images/follow-us-h03.png');
}, function () {
    $(this).attr('src', 'images/follow-us03.png');
});

$(".address-menu>.icon>a img").hover(function () {
    $(this).attr('src', 'images/address-h01.png');
}, function () {
    $(this).attr('src', 'images/address-w01.png');
});

// --------------------------------
// --------------------------------
// -點nav的li, 會滑到指定位置-------
// --------------------------------
// --------------------------------
$("header>nav>ul>li").click(function () {
    let div_h = $(this).find("a").attr("href");
    // console.log(div_h + ": " + $(div_h).offset().top);
    $("html, body").animate({ scrollTop: $(div_h).offset().top - 64 });
});

let menuBtn = 'off';
$(".menu").click(function () {
    $("nav").fadeToggle();
    console.log("test");

    // menuBtn = '';
    if (menuBtn == 'off') {
        $(".menu>img").attr('src', 'images/close.png');
        menuBtn = 'on';
    } else {
        $(".menu>img").attr('src', 'images/menu-btn.png');
        menuBtn = 'off';
    }
});
$(".nav>ul>li").click(function () {
    let div_h = $(this).find("a").attr("href");
    console.log(div_h + ": " + $(div_h).offset().top);
    $("html, body").animate({ scrollTop: $(div_h).offset().top - 78 });
    $(".nav").fadeOut();
    $(".menu>img").attr('src', 'images/menu-btn.png');
});


$(".banner>.btn").click(function () {
    let go_h = $(this).find("a").attr("href");
    $("html, body").animate({ scrollTop: $(go_h).offset().top - 64 });
});

// --------------------------------
// --------------------------------
// ---卷軸捲到某高度title套動畫----
// --------------------------------
// --------------------------------

$(function () {
    $(window).scroll(function () {

        let hbScrollTop = $("html, body").scrollTop();
        let wHeight = $(window).height() - 100;
        console.log(hbScrollTop);

        let aboutOffsetTop = $(".about .title").offset().top;
        if (hbScrollTop > aboutOffsetTop - wHeight) {
            $(".about .title").addClass("animated fadeInLeft");
            $(".about .content").addClass("animated fadeInLeft");
            $(".about .coachs").addClass("animated fadeInLeft");
        }

        let advsOffsetTop = $(".advances h1").offset().top;
        if (hbScrollTop > advsOffsetTop - wHeight) {
            $(".advances h1").addClass("animated fadeInLeft");
        }

        let equipOffsetTop = $(".eq-title").offset().top;
        if (hbScrollTop > equipOffsetTop - wHeight) {
            $(".eq-title").addClass("animated fadeInRight");
            $(".eq-txt").addClass("animated fadeInRight");
        }

        let faqOffsetTop = $(".faq-content").offset().top;
        if (hbScrollTop > faqOffsetTop - wHeight) {
            $(".faq-content").addClass("animated fadeInLeft");
            $(".faq5").addClass("animated fadeInLeft");
        }

        let logoOffsetTop = $(".f-logo").offset().top;
        if (hbScrollTop > logoOffsetTop - wHeight) {
            $(".f-logo").addClass("animated fadeInRight");
        }
        let contactOffsetTop = $(".contact-us").offset().top;
        if (hbScrollTop > contactOffsetTop - wHeight) {
            $(".contact-us").addClass("animated fadeInLeft");
            $(".follow-us").addClass("animated fadeInLeft");
            $(".infomation").addClass("animated fadeInRight");
        }

        if (hbScrollTop > 2000) {
            $(".animal2").css({ "top": "25%", "left": "60%", "transition": "5s" });
        }
        if (hbScrollTop > 2500) {
            $(".animal1").css({ "bottom": "400px", "right": "60%", "transition": "5s" });
        }

        // 若我捲到concept, circle會自動展開， 原本寫在hover
        if ($(window).width() > 768) {
            $(".nav").css({ "display": "block" });

            let offsetTop = $(window).scrollTop();

            let tttop = offsetTop;
            if (offsetTop > 3000) {
                tttop = 1630;
            } else {
                tttop = offsetTop - 1450;
            }

            gsap.to(".diver-gif", {
                top: tttop + "px"
            });

            if (hbScrollTop > 950 && hbScrollTop < 1650) {
                // console.log("在此範圍 " + hbScrollTop);
                $(".concept-content").css({ "clipPath": "circle(75%)" });
                $(".concept-content p:nth-child(1)").css({ "marginTop": "8%" });
                $(".concept-content p:nth-child(3)").css({ "marginBottom": "8%" });

            } else {

                $(".concept-content").css({ "clipPath": "circle(25%)" });
                $(".concept-content p:nth-child(1)").css({ "marginTop": "0%" });
                $(".concept-content p:nth-child(3)").css({ "marginBottom": "0%" });
            }
        } else {
            // 螢幕寬度小於768
            let offsetTop = $(window).scrollTop();

            let tttop = offsetTop;
            if (offsetTop > 2650) {
                tttop = 1630;
            } else {
                tttop = offsetTop - 1000;
            }

            // *********************
            gsap.to(".diver-gif", {
                // top: offsetTop - 1400 + "px"
                top: tttop + "px"
            });

            $(".concept-content").css({ "clipPath": "circle(75%)" });
            $(".concept-content p:nth-child(1)").css({ "marginTop": "8%" });
            $(".concept-content p:nth-child(3)").css({ "marginBottom": "8%" });

            $(".concept-content").css({ "clipPath": "circle(75%)" });

            $(".ad1, .ad3, .ad5").removeClass("floating");
            $(".ad2, .ad4").removeClass("floating2");
        }

        $(window).resize(function () {
            // console.log($(window).width());
            if ($(window).outerWidth() >= 768) {
                $(".nav").show();
            } else {
                $(".nav").hide();
            }
        });

    });
});