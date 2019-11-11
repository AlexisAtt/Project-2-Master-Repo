
$(document).ready(function() {

//Set our variables for HTML buttons

    var mageBtnClick = $("#mage-btn");
    var knightBtnClick = $("#knight-btn");
    var archerBtnClick = $("#archer-btn");
    var rogueBtnClick = $("#rogue-btn");

//=====================================================//
//=================Mage Selection======================//
//=====================================================//

mageBtnClick.on("click", function(){


//ajax call to update userChoice 
    $.ajax({
    type: 'PUT',
    url: '/api/hero/mage',
    data: {userChoice: 1},
    success: function () {
        console.log("You are the Mage!")
        alert("You are the Mage!")
        
    }
});

$.get("/api/hero/" + "mage").then(function (mageData){
    console.log(mageData);

     
})


    });
//=====================================================//
//=================Knight Selection====================//
//=====================================================//

knightBtnClick.on("click", function(){

        $.ajax({
            type: 'PUT',
            url: '/api/hero/knight',
            data: {userChoice: 1},
            success: function () {
                console.log("You are the Knight!")
                alert("You are the Knight!")
                
            }
        });
        
        $.get("/api/hero/" + "knight").then(function (response){
            console.log(response);

        })
    });
//=====================================================//
//=================Archer Selection====================//
//=====================================================//

archerBtnClick.on("click", function(){

        $.ajax({
            type: 'PUT',
            url: '/api/hero/archer',
            data: {userChoice: 1},
            success: function () {
                console.log("You are the Archer!")
                alert("You are the Archer!")
                
            }
        });

        $.get("/api/hero/" + "archer").then(function (response){
            console.log(response);

        })
    });
//=====================================================//
//=================Rogue Selection=====================//
//=====================================================//

rogueBtnClick.on("click", function(){

        $.ajax({
            type: 'PUT',
            url: '/api/hero/rogue',
            data: {userChoice: 1},
            success: function () {
                console.log("You are the Rogue!")
                alert("You are the Rogue!")
                
            }
        });

        $.get("/api/hero/" + "rogue").then(function (response){
            console.log(response);


        })
    });

    

});