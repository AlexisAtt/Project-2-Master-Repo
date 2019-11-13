$(document).ready(function() {
    var restartButton = $("#restartbtn");

    restartButton.on("click", function(){
        $.ajax({
            method: "DELETE",
            url: "/api/heroDelete/1"
        }).then(function(){
              console.log("Hero Deleted")
        });

        $.ajax({
            method: "DELETE",
            url: "/api/heroDelete/2"
        }).then(function(){
              console.log("Hero Deleted")
        });

        $.ajax({
            method: "DELETE",
            url: "/api/heroDelete/3"
        }).then(function(){
              console.log("Hero Deleted")
        });

        $.ajax({
            method: "DELETE",
            url: "/api/heroDelete/4"
        }).then(function(){
              console.log("Hero Deleted")
        });

        $.ajax({
            method: "DELETE",
            url: "/api/monsterDelete/1"
        }).then(function(){
              console.log("Monster Deleted")
        });

        $.ajax({
            method: "DELETE",
            url: "/api/monsterDelete/2"
        }).then(function(){
              console.log("Monster Deleted")
        });

        $.ajax({
            method: "DELETE",
            url: "/api/monsterDelete/3"
        }).then(function(){
              console.log("Monster Deleted")
        });

        $.ajax({
            method: "DELETE",
            url: "/api/monsterDelete/4"
        }).then(function(){
              console.log("Monster Deleted")
        });
    })
});