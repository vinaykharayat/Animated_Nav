let isHidden = false;
$("#nav").on("click", function() {

    if (isHidden) { //when hamburger is clicked and cross is appearing
        // $(this).next().slideToggle();
        $(this).next().animate({
            top: "0%"
        }, "fast", "swing")

        $("#para").fadeIn();
        $("#leftColor").animate({
            width: "0%",
            backgroundColor: "blue"
        }, 'fast', "swing")
        $("#branding").css({ "text-shadow": "unset" })
        $("#rightColor").animate({
            width: "0%",
            backgroundColor: "blue"
        }, 'fast', "swing")

        $("#second").animate({
            left: "0px",
            opacity: '100%'
        }, 'fast', "swing")
        $("#first").css({ 'transform': 'rotate(' + 0 + 'deg)', "transition": "0.3s" })
        $("#first").css({ 'transform-origin': '0 0' })
        $("#third").css({ 'transform': 'rotate(' + 0 + 'deg)', "transition": "0.3s" })
        $("#third").css({ 'transform-origin': '0 0' })
        $("#droppingList").hide();

        isHidden = false;
    } else {

        $("#leftColor").animate({
            width: "30%",
            backgroundColor: "blue"
        }, 'fast', "swing")
        $("#branding").css({ "text-shadow": "2px 2px black" })
        $("#rightColor").animate({
            width: "30%",
            backgroundColor: "blue"
        }, 'fast', "swing")
        $("#para").fadeOut();
        $(this).next().animate({
            top: "50%"
        }, "fast", "swing")

        $("#second").animate({
            left: "-100px",
            opacity: '0'
        }, 'fast', "swing")
        $("#first").css({ 'transform': 'rotate(' + 50 + 'deg)', "transition": "0.3s" })
        $("#first").css({ 'transform-origin': '5% 40%' })
        $("#third").css({ 'transform': 'rotate(' + -50 + 'deg)', "transition": "0.3s" })
        $("#third").css({ 'transform-origin': '5% 40%' })
        $("#droppingList").show();

        isHidden = true;
    }

})