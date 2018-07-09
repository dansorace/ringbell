$(document).one("pagecreate", function () {

    /* create reside-menu */
    $("#content").enhanceWithin().hide();

    /* open function */
    function openMenu() {
        var activePage = $("body").pagecontainer("getActivePage");
        $("body").css({
            "overflow-y": "hidden"
        });
        var padding = $(".ui-header", activePage).outerHeight() + $(".ui-footer.ui-footer-fixed", activePage).outerHeight();
        activePage.height($(window).height() - padding);
        activePage.addClass("panel-animate panel-open");
        $("#content").show();
    }

    /* close function */
    function closeMenu() {
        var activePage = $("body").pagecontainer("getActivePage");
        $(".ui-page-active").addClass("panel-close").removeClass("panel-open");
        $("#content").css("z-index", "-9999");
    }

    /* change page */
    $("#content").on("click", "a:not(.panel-close-btn)", function (e) {
        $(".activePage").removeClass("activePage");
        e.preventDefault();
        var page = $(this).attr("href");
        $(this).addClass("activePage");
        closeMenu();
        $(document).one("webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd", ".panel-close", function (e) {
            $("body").pagecontainer("change", page, {
                transition: "flip"
            });
        });
    });

    /* open */
    $(".panel").on("click", openMenu);

    /* close */
    $(".panel-close-btn").on("click", closeMenu);

    /* remove animation and extra styles */
    $(document).on("webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd", ".panel-open, .panel-close", function (e) {
        var activePage = $("body").pagecontainer("getActivePage");
        if ($(this).hasClass("panel-open")) {
            $("#content").css("z-index", "9999");
        }
        if ($(this).hasClass("panel-close")) {
            $("#content").hide();
            $("body").removeAttr("style");
            activePage.removeAttr("style");
            $(this).removeClass("panel-animate panel-close").css({
                "padding-top": $(".ui-header", activePage).outerHeight(),
                    "padding-bottom": $(".ui-footer.ui-footer-fixed", activePage).outerHeight()
            });
            $.mobile.resetActivePageHeight();
        }
    });
});