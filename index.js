var level = 1;
var tipCount = 3;
var gameStarted = false;
var constList = ["green", "red", "yellow", "blue"];
var listOfEntries = [];
var generatedList = [];
$(document).on('keydown', function(e) {
    if (e.key == "a" || e.key == "A") {

        if (!gameStarted) {


            generateList(level);
            gameStarted = true;
            $("h1").html("LEVEL " + level);
        } else {

        }
    } else {

    }



});

$(".hint-button").click(function() {
    if (tipCount > 0 && gameStarted) {

        $(".hint-button").addClass("pressed");


        setTimeout(function() {
            $(".hint-button").removeClass("pressed");
        }, 100);
        tipCount--;
        $("#tip-title").text("Remaining Tip: " + tipCount);
        var remainingLength = generatedList.length - listOfEntries.length;

        let i = 0;
        loopTip();

        function loopTip() {
            setTimeout(function() {

                var currentIndex = generatedList[generatedList.length - (remainingLength - i)];

                switch (currentIndex) {
                    case (1):
                        $("#green-tip").removeClass("invis");


                        setTimeout(function() {
                            $("#green-tip").addClass("invis");
                        }, 200);
                        break;
                    case (2):
                        $("#red-tip").removeClass("invis");


                        setTimeout(function() {
                            $("#red-tip").addClass("invis");
                        }, 200);
                        break;
                    case (3):
                        $("#yellow-tip").removeClass("invis");


                        setTimeout(function() {
                            $("#yellow-tip").addClass("invis");
                        }, 200);
                        break;
                    case (4):
                        $("#blue-tip").removeClass("invis");


                        setTimeout(function() {
                            $("#blue-tip").addClass("invis");
                        }, 200);
                        break;
                }
                if (i < remainingLength) {
                    loopTip();
                }
                i++;
            }, 400)

        }

    }


})
$(".btn").click(function() {
    if (gameStarted) {
        var color = $(this).attr("id");



        switch (color) {
            case ("green"):
                listOfEntries.push(1);
                animatePress(color);
                checkList();
                break;
            case ("red"):
                listOfEntries.push(2);
                animatePress(color);
                checkList();
                break;
            case ("yellow"):
                listOfEntries.push(3);
                animatePress(color);
                checkList();
                break;
            case ("blue"):
                listOfEntries.push(4);
                animatePress(color);
                checkList();
                break;
            default:



        }


    } else {

    }
    //ölü kod

})


function checkList() {

    if (level == listOfEntries.length && listOfEntries[listOfEntries.length - 1] == generatedList[listOfEntries.length - 1]) {




        level++;
        if (level % 3 == 0) {
            tipCount++;
            $("#tip-title").text("Remaining Tip: " + tipCount);
        }
        listOfEntries = [];

        playSound("up");

        generateList(level);

        $("h1").html("LEVEL " + level);





    } else {
        if (listOfEntries[listOfEntries.length - 1] == generatedList[listOfEntries.length - 1]) {

        } else {
            level = 1;
            $("h1").html("GAME OVER, PRESS A TO START AGAIN");
            listOfEntries = [];
            listOfEntries = [];
            gameStarted = false;
            playSound("wrong");
            tipCount = 3;
            $("#tip-title").text("Remaining Tip: " + tipCount);
        }

    }
    //ölü kod

}

function generateList(level) {

    setTimeout(function() {
        generatedList = [];
        let i = 0;
        myLoop();

        function myLoop() {
            setTimeout(function() {
                generateNext();
                i++;
                if (i < level) { myLoop(); }

            }, 400)

        }
    }, 400)



}

function generateNext() {
    // bu kısım sonraki seviye için tek bir parça hazırlar
    var random = Math.floor(Math.random() * 4) + 1;
    var name = constList[random - 1];
    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(name);
    generatedList.push(random);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColor) {


    $("#" + currentColor).addClass("pressed");


    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}