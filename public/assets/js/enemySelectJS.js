$(document).ready(function() {

    var monsterOneBtnClick = $("#monsterLvlOne-btn");
    var monsterTwoBtnClick = $("#monsterLvlTwo-btn");
    var monsterThreeBtnClick = $("#monsterLvlThree-btn");
    var monsterFourBtnClick = $("#monsterLvlFour-btn");

    monsterOneBtnClick.on("click", function(){
        $.get("/api/monster/" + "monster1").then(function (response){
            console.log(response);
        })
    });

    monsterTwoBtnClick.on("click", function(){
        $.get("/api/monster/" + "monster2").then(function (response){
            console.log(response);
        })
    });


    monsterThreeBtnClick.on("click", function(){
        $.get("/api/monster/" + "monster3").then(function (response){
            console.log(response);
        })
    });


    monsterFourBtnClick.on("click", function(){
        $.get("/api/monster/" + "monster4").then(function (response){
            console.log(response);
        })
    });







});