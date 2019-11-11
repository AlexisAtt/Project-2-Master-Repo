
$(document).ready(function() {

    var monsterOneBtnClick = $("#monsterLvlOne-btn");
    var monsterTwoBtnClick = $("#monsterLvlTwo-btn");
    var monsterThreeBtnClick = $("#monsterLvlThree-btn");
    var monsterFourBtnClick = $("#monsterLvlFour-btn");

    monsterOneBtnClick.on("click", function(){
        // selectedMonster = "../images/characters"
        $.ajax({
            type: 'PUT',
            url: '/api/monster/monster1',
            data: {enemyChoice: 1},
            success: function () {
                console.log("Success!")
                
            }
        });
        $.get("/api/monster/" + "monster1").then(function (response){
            console.log(response);
            window.location.href = "/battleGround"
        })
    });

    monsterTwoBtnClick.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/monster/monster2',
            data: {enemyChoice: 1},
            success: function () {
                console.log("Success!")
                
            }
        });
        $.get("/api/monster/" + "monster2").then(function (response){
            console.log(response);
        })
    });


    monsterThreeBtnClick.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/monster/monster3',
            data: {enemyChoice: 1},
            success: function () {
                console.log("Success!")
                
            }
        });
        $.get("/api/monster/" + "monster3").then(function (response){
            console.log(response);
        })
    });


    monsterFourBtnClick.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/monster/monster4',
            data: {enemyChoice: 1},
            success: function () {
                console.log("Success!")
                
            }
        });
        $.get("/api/monster/" + "monster4").then(function (response){
            console.log(response);
            window.location.href = "/battleGround"
        })
    });







});

//Actually Shop js file
//onclick change view of chosen monster to visible in battle screen and hide all other monsters
//populate enemy stat field with enemy stats