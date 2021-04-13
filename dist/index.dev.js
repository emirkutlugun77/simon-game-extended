"use strict";

var level = 1;
var gameStarted = false;
var constList = ["green", "red", "yellow", "blue"];
var listOfEntries = [];
var generatedList = [];
$(document).on('keydown', function (e) {
  if (e.key == "a" || e.key == "A") {
    console.log(e.key);

    if (!gameStarted) {
      generateList(level);
      gameStarted = true;
      $("h1").html("LEVEL " + level);
    } else {}
  } else {}
});
$(".btn").click(function () {
  if (gameStarted) {
    var color = $(this).attr("id");
    console.log("listOfEntries: " + listOfEntries.length);
    console.log("level: " + level);

    switch (color) {
      case "green":
        listOfEntries.push(1);
        checkList();
        break;

      case "red":
        listOfEntries.push(2);
        checkList();
        break;

      case "yellow":
        listOfEntries.push(3);
        checkList();
        break;

      case "blue":
        listOfEntries.push(4);
        checkList();
        break;

      default:
        console.log(listOfEntries.length);
    }
  } else {
    console.log("err1");
  } //ölü kod

});

function checkList() {
  console.log(generatedList);
  console.log(JSON.stringify(listOfEntries));

  if (level == listOfEntries.length) {
    if (JSON.stringify(generatedList) == JSON.stringify(listOfEntries)) {
      console.log("gz");
      level++;
      listOfEntries = [];
      generateList(level);
      console.log(generatedList);
      $("h1").html("LEVEL " + level);
    } else {
      level = 0;
      $("h1").html("GAME OVER, PRESS A TO START AGAIN");
      listOfEntries = [];
      gameStarted = false;
    }
  } else {} //ölü kod

}

function generateList(level) {
  generatedList = [];

  for (var x = 0; x < level; x++) {
    var random = Math.floor(Math.random() * 4 + 1);
    $("#" + constList[random]).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log(random);
    generatedList.push(random);
  }
}