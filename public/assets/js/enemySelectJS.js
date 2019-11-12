$(document).ready(function() {

    var monsterOneBtnClick = $("#monsterLvlOne-btn");
    var monsterTwoBtnClick = $("#monsterLvlTwo-btn");
    var monsterThreeBtnClick = $("#monsterLvlThree-btn");
    var monsterFourBtnClick = $("#monsterLvlFour-btn");

    monsterOneBtnClick.on("click", function(){
        
        $.ajax({
            type: 'PUT',
            url: '/api/monster/1',
            data: {enemyChoice: 1},
            success: function () {
                console.log("Success!")
                
            }
        });
        $.get("/api/monster/" + "1").then(function (response){
            console.log(response);
            window.location.href = "/battleGround"
        })
    });

    monsterTwoBtnClick.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/monster/2',
            data: {enemyChoice: 1},
            success: function () {
                console.log("Success!")
                
                
            }
        });
        $.get("/api/monster/" + "2").then(function (response){
            console.log(response);
            window.location.href = "/battleGround"
        })
    });


    monsterThreeBtnClick.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/monster/3',
            data: {enemyChoice: 1},
            success: function () {
                console.log("Success!")
                
            }
        });
        $.get("/api/monster/" + "3").then(function (response){
            console.log(response);
            window.location.href = "/battleGround"
        })
    });


    monsterFourBtnClick.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/monster/4',
            data: {enemyChoice: 1},
            success: function () {
                console.log("Success!")
                
            }
        });
        $.get("/api/monster/" + "4").then(function (response){
            console.log(response);
            window.location.href = "/battleGround"
        })
    });


});

var buttonAudio = document.getElementById("myAudio");

function playAudio() {
    buttonAudio.play();
}