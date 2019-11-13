$(document).ready(function(){
    var hero = {};
    var healthItemBtn = $("#healthItem");
    var attackItemBtn = $("#attackItem");
    var armorItemBtn = $("#armorItem");
    var levelItemBtn = $("#levelItem");
    var sendStats = function(){
        $.get("/api/heroChoice/1").then(function (response){
            hero = response;
          $("#heroName").text(response.name);
          $("#empty-heroSpace").attr("src", response.characterPic);
          $("#heroLvl").text("Level: "+response.level);
          $("#heroHP").text("Health: "+response.health);
          $("#heroAP").text("Attack: "+response.attack);
          $("#heroBP").text("Block: "+response.block);
          $("#heroDP").text("Dodge: "+response.dodge);
          $("#heroCrit").text("Crit Mod: "+response.critMod);
          $("#heroCoin").text("Coins: "+response.coin);
          
        });
   
    }
    sendStats();
    healthItemBtn.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/heroHealed/1',
            data: {
                health: (hero.health + 10),
                coin: (hero.coin - 2)
            },
            success: function () {
                console.log("Health Buffed");
                sendStats();
            }
        });
    });
    attackItemBtn.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/heroHoned/1',
            data: {
                attack: (hero.attack + 10),
                coin: (hero.coin - 5)
            },
            success: function () {
                console.log("Hero Strength up");
                sendStats();
            }
        });
    });
    armorItemBtn.on("click", function(){
        $.ajax({
            type: 'PUT',
            url: '/api/heroArmored/1',
            data: {
                block: (hero.block + 10),
                dodge: (hero.dodge + 10),
                coin: (hero.coin - 5)
            },
            success: function () {
                console.log("Hero Defense up");
                sendStats();
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
                sendStats();
            }
        });
    });
})