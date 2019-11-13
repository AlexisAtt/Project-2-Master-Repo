$(document).ready(function(){
    var hero = {}
    $.get("/api/heroChoice/1").then(function (response){
        hero = response;
        console.log(hero);

    });


    var healthItemBtn = $("#healthItem");
    var attackItemBtn = $("#attackItem");
    var armorItemBtn = $("#armorItem");
    var levelItemBtn = $("#levelItem");

    healthItemBtn.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/heroLeveledUp/1',
            data: {
                health: (hero.health + 10),
                coin: (hero.coin - 2)
            },
            success: function () {
                console.log("Health Buffed");

            }
        });
    });
    attackItemBtn.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/heroLeveledUp/1',
            data: {
                attack: (hero.attack + 10),
                coin: (hero.coin - 5)
            },
            success: function () {
                console.log("Hero Strength up");

            }
        });
    });
    armorItemBtn.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/heroLeveledUp/1',
            data: {
                block: (hero.block + 10),
                dodge: (hero.dodge + 10),
                coin: (hero.coin - 5)
            },
            success: function () {
                console.log("Hero Defense up");

            }
        });
    });
    levelItemBtn.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/heroLeveledUp/1',
            data: {
                health: (hero.health + 10),
                attack: (hero.attack + 10),
                block: (hero.block + 10),
                dodge: (hero.dodge + 10),
                level: (hero.level + 1),
                coin: (hero.coin - 10)
            },
            success: function () {
                console.log("Hero leveled up");

            }
        });
    });
})