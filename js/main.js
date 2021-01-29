let isHidden = false;
document.getElementById('nav').addEventListener("click", function() {
        if (isHidden) {

            document.getElementById("leftColor").style.transition = "1s";
            document.getElementById("leftColor").style.width = "0%";
            document.getElementById("rightColor").style.transition = "1s";
            document.getElementById("rightColor").style.width = "0%";
            var opacity = 0;
            var intervalID = setInterval(function() {
                if (opacity < 1) {
                    opacity += 0.2
                    document.getElementById('para').style.opacity = opacity;
                } else {
                    clearInterval(intervalID);
                }
            }, 50);
            var droppingListOp = 1;
            var intervalID2 = setInterval(function() {
                if (droppingListOp >= 0) {
                    droppingListOp -= 0.2;
                    document.getElementById('droppingList').style.opacity = droppingListOp;
                } else {
                    clearInterval(intervalID2);
                }
            }, 10);

            document.getElementById("branding").style.textShadow = "unset"
            document.getElementById("droppingList").style.transition = "1s"
            document.getElementById("droppingList").style.top = "0%"
                // document.getElementById("droppingList").style.display = "none"

            document.getElementById("second").style.left = "0px";
            document.getElementById("second").style.transition = "500";
            document.getElementById("second").style.opacity = "100%";
            document.getElementById("first").style.transform = "rotate(0deg)";
            document.getElementById("first").style.transition = "0.3s";
            document.getElementById("first").style.transformOrigin = "0 0";
            document.getElementById("third").style.transform = "rotate(0deg)";
            document.getElementById("third").style.transition = "0.3s";
            document.getElementById("third").style.transformOrigin = "0 0";
            isHidden = false;

            //when hamburger is clicked and cross is appearing
            // $(this).next().slideToggle();
            // document.getElementById("droppingList").style.top = 0;
            // $(this).next().animate({
            //     top: "0%"
            // }, "fast", "swing")

            // $("#para").fadeIn();

            // $("#leftColor").animate({
            //     width: "0%",
            //     backgroundColor: "blue"
            // }, 'fast', "swing")
            // $("#branding").css({ "text-shadow": "unset" })
            // $("#rightColor").animate({
            //     width: "0%",
            //     backgroundColor: "blue"
            // }, 'fast', "swing")

            // $("#second").animate({
            //     left: "0px",
            //     opacity: '100%'
            // }, 'fast', "swing")
            // $("#first").css({ 'transform': 'rotate(' + 0 + 'deg)', "transition": "0.3s" })
            // $("#first").css({ 'transform-origin': '0 0' })
            // $("#third").css({ 'transform': 'rotate(' + 0 + 'deg)', "transition": "0.3s" })
            // $("#third").css({ 'transform-origin': '0 0' })
            // $("#droppingList").hide();


        } else {

            document.getElementById("leftColor").style.transition = "1s";
            document.getElementById("leftColor").style.width = "30%";
            document.getElementById("rightColor").style.transition = "1s";
            document.getElementById("rightColor").style.width = "30%";
            document.getElementById("branding").style.textShadow = "2px 2px black"


            var opacity = 1;
            var intervalID = setInterval(function() {
                if (opacity >= 0) {
                    opacity -= 0.2
                    document.getElementById('para').style.opacity = opacity;
                } else {
                    clearInterval(intervalID);
                }
            }, 50);
            var droppingListOp = 0;
            var intervalID2 = setInterval(function() {
                if (droppingListOp < 1) {
                    droppingListOp += 0.2
                    document.getElementById('droppingList').style.opacity = droppingListOp;
                } else {
                    clearInterval(intervalID2);
                }
            }, 10);
            document.getElementById("droppingList").style.transition = "1s"
            document.getElementById("droppingList").style.top = "50%"
                // document.getElementById("droppingList").style.border = "solid"
                // document.getElementById("droppingList").style.display = "block"


            document.getElementById("second").style.transition = "1s";
            document.getElementById("second").style.left = "-100px";

            document.getElementById("second").style.opacity = "0";
            document.getElementById("first").style.transform = "rotate(50deg)";
            document.getElementById("first").style.transition = "0.3s";
            document.getElementById("first").style.transformOrigin = "5% 40%";
            document.getElementById("third").style.transform = "rotate(-50deg)";
            document.getElementById("third").style.transition = "0.3s";
            document.getElementById("third").style.transformOrigin = "5% 40%";

            isHidden = true;

            // $("#leftColor").animate({
            //     width: "30%",
            //     backgroundColor: "blue"
            // }, 'fast', "swing")



            // $("#branding").css({ "text-shadow": "2px 2px black" })
            // $("#rightColor").animate({
            //     width: "30%",
            //     backgroundColor: "blue"
            // }, 'fast', "swing")



            // document.getElementById("droppingList").style.opacity = "1"

            // $(this).next().animate({
            //     top: "50%"
            // }, "fast", "swing")

            // $("#second").animate({
            //     left: "-100px",
            //     opacity: '0'
            // }, 'fast', "swing")
            // $("#first").css({ 'transform': 'rotate(' + 50 + 'deg)', "transition": "0.3s" })
            // $("#first").css({ 'transform-origin': '5% 40%' })
            // $("#third").css({ 'transform': 'rotate(' + -50 + 'deg)', "transition": "0.3s" })
            // $("#third").css({ 'transform-origin': '5% 40%' })
            // $("#droppingList").show();


        }
    })
    // $("#nav").on("click", function() {



// })