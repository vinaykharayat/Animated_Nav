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

        //Decreasing visibility of menu
        var droppingListOp = 1;
        var intervalID2 = setInterval(function() {
            if (droppingListOp >= 0) {
                droppingListOp -= 0.2;
                document.getElementById('droppingList').style.opacity = droppingListOp;
            } else {
                clearInterval(intervalID2);
            }
        }, 10);

        //Removing shadow from heading
        document.getElementById("branding").style.textShadow = "unset"

        //Moving menu to upward
        document.getElementById("droppingList").style.transition = "1s"
        document.getElementById("droppingList").style.top = "0%"

        //Increasing visibility of Middle element of hamburger icon
        document.getElementById("second").style.left = "0px";
        document.getElementById("second").style.transition = "500";
        document.getElementById("second").style.opacity = "100%";

        //Rotating first element of hamburger icon to initial state
        document.getElementById("first").style.transform = "rotate(0deg)";
        document.getElementById("first").style.transition = "0.3s";
        document.getElementById("first").style.transformOrigin = "0 0";

        //Rotating third element of hamburger icon to initial state
        document.getElementById("third").style.transform = "rotate(0deg)";
        document.getElementById("third").style.transition = "0.3s";
        document.getElementById("third").style.transformOrigin = "0 0";
        isHidden = false;

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

        //Incresing visibility of menu
        var droppingListOp = 0;
        var intervalID2 = setInterval(function() {
            if (droppingListOp < 1) {
                droppingListOp += 0.2
                document.getElementById('droppingList').style.opacity = droppingListOp;
            } else {
                clearInterval(intervalID2);
            }
        }, 10);

        //Moving menu to downward
        document.getElementById("droppingList").style.transition = "1s"
        document.getElementById("droppingList").style.top = "50%"

        //moving middle element of hamburger icon to left with animation
        document.getElementById("second").style.transition = "1s";
        document.getElementById("second").style.left = "-100px";
        document.getElementById("second").style.opacity = "0";

        //rotating first element of hamburger with animation
        document.getElementById("first").style.transform = "rotate(50deg)";
        document.getElementById("first").style.transition = "0.3s";
        document.getElementById("first").style.transformOrigin = "5% 40%";

        //rotating last element of hamburger with animation
        document.getElementById("third").style.transform = "rotate(-50deg)";
        document.getElementById("third").style.transition = "0.3s";
        document.getElementById("third").style.transformOrigin = "5% 40%";

        isHidden = true;
    }
})