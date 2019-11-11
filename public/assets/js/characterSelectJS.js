
$(document).ready(function() {
    

    var mageBtnClick = $("#mage-btn");
    var knightBtnClick = $("#knight-btn");
    var archerBtnClick = $("#archer-btn");
    var rogueBtnClick = $("#rogue-btn");

    

    mageBtnClick.on("click", function(){

     //  $("empty-heroSpace").attr("href", "../images/characters/archerPic.png");

    

        $.get("/api/hero/" + "mage").then(function (response){
            console.log(response);

            
            
        })
        
        $.ajax({
            method: "PUT",
            url: "/api/hero/" + "mage",
            data: {userChoice: true}
          }).then(function(){
            window.location.href = "/enemySelect"
          });


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
