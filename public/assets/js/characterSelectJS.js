
$(document).ready(function() {



    var mageBtnClick = $("#mage-btn");
    var knightBtnClick = $("#knight-btn");
    var archerBtnClick = $("#archer-btn");
    var rogueBtnClick = $("#rogue-btn");

    

    mageBtnClick.on("click", function(){

      // $("#empty-heroSpace").attr("src", "../images/characters/archerPic.png");



//ajax call 
    $.ajax({
    type: 'PUT',
    url: '/api/hero/mage',
    data: {userChoice: 1},
    success: function () {
        console.log("Success!")
        
    }
});

$.get("/api/hero/" + "mage").then(function (mageData){
    console.log(mageData);
    //update value userchoice true
    //if user choice value is updated as true carry data over into local
    //localStorage.setItem('character', character)
    //make sure to clear local storage
    //link the user image.
    //if userChoice = true
     
})


    });

    knightBtnClick.on("click", function(){
        $.get("/api/hero/" + "knight").then(function (response){
            console.log(response);

      //      $("#empty-heroSpace").replaceWith($("#knightImage"));
           // $("#mageImage").hide();
           // $("#archerImage").hide();
           // $("#rogueImage").hide();
           // $("#knightImage").show();

        })
    });


    archerBtnClick.on("click", function(){
        $.get("/api/hero/" + "archer").then(function (response){
            console.log(response);

      //      $("#empty-heroSpace").replaceWith($("#archerImage"));


        })
    });


    rogueBtnClick.on("click", function(){
        $.get("/api/hero/" + "rogue").then(function (response){
            console.log(response);

       //     $("#empty-heroSpace").replaceWith($("#rogueImage"));
   

        })
    });









});