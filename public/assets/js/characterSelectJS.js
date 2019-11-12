
$(document).ready(function() {
    

    var mageBtnClick = $("#mage-btn");
    var knightBtnClick = $("#knight-btn");
    var archerBtnClick = $("#archer-btn");
    var rogueBtnClick = $("#rogue-btn");

    

    mageBtnClick.on("click", function(){

        $.get("/api/hero/" + "4").then(function (response){
            console.log(response);
            alert("You are the Mage!")
   
            
        })
        
        $.ajax({
            method: "PUT",
            url: "/api/hero/" + "4",
            data: {userChoice: true}
          }).then(function(){
            window.location.href = "/enemySelect"
          });


    });

    knightBtnClick.on("click", function(){
        $.get("/api/hero/" + "2").then(function (response){
            console.log(response);
            alert("You are the Knight!")

        })

        $.ajax({
            method: "PUT",
            url: "/api/hero/" + "2",
            data: {userChoice: true}
          }).then(function(){
            window.location.href = "/enemySelect"
          });
    });


    archerBtnClick.on("click", function(){
        $.get("/api/hero/" + "1").then(function (response){
            console.log(response);
            alert("You are the Archer!")

      //      $("#empty-heroSpace").replaceWith($("#archerImage"));


        })

        $.ajax({
            method: "PUT",
            url: "/api/hero/" + "1",
            data: {userChoice: true}
          }).then(function(){
            window.location.href = "/enemySelect"
          });
    });


    rogueBtnClick.on("click", function(){
        $.get("/api/hero/" + "3").then(function (response){
            console.log(response);
            alert("You are the Rogue!")

       //     $("#empty-heroSpace").replaceWith($("#rogueImage"));
   

        })

        $.ajax({
            method: "PUT",
            url: "/api/hero/" + "3",
            data: {userChoice: true}
          }).then(function(){
            window.location.href = "/enemySelect"
          });
    });






});