$(document).ready(function(){
    var hero = {};
    var monster = {};
    var attackBtnClick = $("#attack-btn");
    var dodgeBtnClick = $("#dodge-btn");
    var blockBtnClick = $("#block-btn");
    
    var levelUp = function(){
        $.ajax({
            type: 'PUT',
            url: '/api/heroLeveledUp/1',
            data: {
                health: (hero.health + 10),
                attack: (hero.attack + 10),
                block: (hero.block + 10),
                dodge: (hero.dodge + 10),
                level: (hero.level + 1),
                coin: (hero.coin + 5)
            },
            success: function () {
                console.log("Hero leveled up");

            }
        });
    }

    var sendStats = function(){
        $.get("/api/heroChoice/1").then(function (response){
          hero = response;
          console.log(hero);
          console.log(hero.attack);
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
        $.get("/api/monsterChoice/1").then(function (response){
          monster = response;
          console.log(monster);
          console.log(monster.attack);
          $("#monstName").text(response.name);
          $("#empty-enemySpace").attr("src", response.characterPic);
          $("#monstLvl").text("Level: "+response.level);
          $("#monstHP").text("Health: "+response.health);
          $("#monstAP").text("Attack: "+response.attack);
          $("#monstBP").text("Block: "+response.block);
          $("#monstDP").text("Dodge: "+response.dodge);
          $("#monstCrit").text("Crit Mod: "+response.critMod);

        });
    };

    var isAlive = function (check) {
        if (check.health <= 0) {
            if (check.name === hero.name){
                $.ajax({
                    type: 'PUT',
                    url: '/api/heroDied/1',
                    data: {alive: false},
                    success: function () {
                        $("#heroEventLog").text(hero.name + " has been Defeated!");
                        sendStats();
                        window.location.href = "/gameOver"
    
                    }
                });
            } else {
                if (monster.id === 4) {
                    $.ajax({
                        type: 'PUT',
                        url: '/api/monsterDied/1',
                        data: {alive: false},
                        success: function () {
                            levelUp();
                            sendStats();
                            $("#enemyEventLog").text(monster.name + " has been Defeated!");
                            var goToWin = $("<button/>", {
                                text: "Complete Your Quest",
                                id: "finalBtn",
                                click: function () { window.location.href = "/winsPage"; $.ajax({
                                    type: 'PUT',
                                    url: '/api/monsterUnselect/1',
                                    data: {enemyChoice: false},
                                    success: function () {
                                        console.log("enemy unselected")
                    
                                    }
                                });
                            }
                            });

                            $("#buttonField").html(goToWin);
        
                        }
                    });
                } else {
                    $.ajax({
                        type: 'PUT',
                        url: '/api/monsterDied/1',
                        data: {alive: false},
                        success: function () {
                            levelUp();
                            sendStats();
                            $("#enemyEventLog").text(monster.name + " has been Defeated!");
                            var collectItem = $("<button/>", {
                                text: "Collect Item",
                                id: "collectBtn",
                                click: function () { window.location.href = "/winsPage"; $.ajax({
                                    type: 'PUT',
                                    url: '/api/monsterUnselect/1',
                                    data: {enemyChoice: false},
                                    success: function () {
                                        console.log("enemy unselected")
                    
                                    }
                                });
                            }
                            });

                            $("#buttonField").html(collectItem);
        
                        }
                    });
                }
            }

        }
    };

    var attack = function(attacker, target){
        var hitChance = Math.floor(Math.random()*10)+attacker.critMod;

        if (attacker.health < 20) {
            hitChance = Math.floor(Math.random()*10)+attacker.critMod+3;
        };
        if (attacker.name === hero.name){

        if (hitChance >= 10) {
            
            $.ajax({
                type: 'PUT',
                url: '/api/monsterAttacked/1',
                data: {health: target.health -= (attacker.attack*3)},
                success: function () {
                    $("#heroEventLog").text(attacker.name + " landed a Critical Hit against " + target.name + " dealing " + attacker.attack*3  + " damage!");
                    sendStats();
                    isAlive(target);
                }
            });
            
        } else if (hitChance > 3 && hitChance < 10) {
            
            $.ajax({
                type: 'PUT',
                url: '/api/monsterAttacked/1',
                data: {health: target.health -= attacker.attack},
                success: function () {
                    $("#heroEventLog").text(attacker.name + " landed a Hit against " + target.name + " dealing " + attacker.attack  + " damage!");
                    sendStats();
                    isAlive(target);
                }
            });
        } else { 
            $("#heroEventLog").text(attacker.name + " Missed!");
        };
    } else {
        if (hitChance >= 10) {
            
            $.ajax({
                type: 'PUT',
                url: '/api/heroAttacked/1',
                data: {health: target.health -= (attacker.attack*3)},
                success: function () {
                    $("#enemyEventLog").text(attacker.name + " landed a Critical Hit against " + target.name + " dealing " + attacker.attack*3  + " damage!");
                    sendStats();
                    isAlive(target);

                }
            });
            
        } else if (hitChance > 3 && hitChance < 10) {
            
            $.ajax({
                type: 'PUT',
                url: '/api/heroAttacked/1',
                data: {health: target.health -= attacker.attack},
                success: function () {
                    $("#enemyEventLog").text(attacker.name + " landed a Hit against " + target.name + " dealing " + attacker.attack  + " damage!");
                    sendStats();
                    isAlive(target);
                }
            });
        } else { 
            $("#enemyEventLog").text(attacker.name + " Missed!");
        };
    };
    };
    
    var dodge = function(attacker, dodger){
        if(dodger.dodge >= attacker.attack) {
            if(attacker.name === hero.name){
                $("#heroEventLog").text(attacker.name + " Missed!")
                $("#enemyEventLog").text(dodger.name + " Successfully Dodged!")
            } else {
                $("#enemyEventLog").text(attacker.name + " Missed!")
                $("#heroEventLog").text(dodger.name + " Successfully Dodged!")
            }
        } else {
            if(attacker.name === hero.name){
                $.ajax({
                    type: 'PUT',
                    url: '/api/monsterAttacked/1',
                    data: {health: dodger.health -= attacker.attack},
                    success: function () {
                        $("#enemyEventLog").text(dodger.name + " Failed to Dodge!")
                        $("#heroEventLog").text(attacker.name + " landed a Hit against " + dodger.name + " dealing " + attacker.attack  + " damage!");
                        sendStats();
                        isAlive(dodger);
                    }
                });
            } else {
                $.ajax({
                    type: 'PUT',
                    url: '/api/heroAttacked/1',
                    data: {health: dodger.health -= attacker.attack},
                    success: function () {
                        $("#heroEventLog").text(dodger.name + " Failed to Dodge!")
                        $("#enemyEventLog").text(attacker.name + " landed a Hit against " + dodger.name + " dealing " + attacker.attack  + " damage!");
                        sendStats();
                        isAlive(dodger);
                    }
                });
            }
    };
    };
    
    var block = function(attacker, blocker){
        if (blocker.block >= attacker.attack) {
            if(attacker.name === hero.name){
                $("#heroEventLog").text(attacker.name + " Dealt No Damage!")
                $("#enemyEventLog").text(blocker.name + " Successfully Blocked!")
            } else {
                $("#enemyEventLog").text(attacker.name + " Dealt No Damage!")
                $("#heroEventLog").text(blocker.name + " Successfully Blocked!")
            }
        } else if ((attacker.strength - blocker.block) >= 0) {
            if(attacker.name === hero.name){
                $.ajax({
                    type: 'PUT',
                    url: '/api/monsterAttacked/1',
                    data: {health: blocker.health -= (attacker.attack-blocker.block)},
                    success: function () {
                        $("#enemyEventLog").text(blocker.name + " Blocked but still took " + (attacker.attack-blocker.block) + "Damage!")
                        $("#heroEventLog").text(attacker.name + " landed a Hit against " + blocker.name + " dealing " + (attacker.attack-blocker.block)  + " Damage!");
                        sendStats();
                        isAlive(blocker);
                    }
                });
            } else {
                $.ajax({
                    type: 'PUT',
                    url: '/api/heroAttacked/1',
                    data: {health: blocker.health -= (attacker.attack-blocker.block)},
                    success: function () {
                        $("#heroEventLog").text(blocker.name + " Blocked but still took " + (attacker.attack-blocker.block) + "Damage!")
                        $("#enemyEventLog").text(attacker.name + " landed a Hit against " + blocker.name + " dealing " + (attacker.attack-blocker.block)  + " Damage!");
                        sendStats();
                        isAlive(blocker);
                    }
                });
            }
        } else {
            if(attacker.name === hero.name){
                $.ajax({
                    type: 'PUT',
                    url: '/api/monsterAttacked/1',
                    data: {health: blocker.health -= attacker.attack},
                    success: function () {
                        $("#enemyEventLog").text(blocker.name + " Failed to Block!")
                        $("#heroEventLog").text(attacker.name + " landed a Hit against " + blocker.name + " dealing " + attacker.attack  + " damage!");
                        sendStats();
                        isAlive(blocker);
                    }
                });
            } else {
                $.ajax({
                    type: 'PUT',
                    url: '/api/heroAttacked/1',
                    data: {health: blocker.health -= attacker.attack},
                    success: function () {
                        $("#heroEventLog").text(blocker.name + " Failed to Block!")
                        $("#enemyEventLog").text(attacker.name + " landed a Hit against " + blocker.name + " dealing " + attacker.attack  + " damage!");
                        sendStats();
                        isAlive(blocker);
                    }
                });
            }
        }
    };

    sendStats();

    attackBtnClick.on("click", function(){
        var monsterResponse = Math.floor(Math.random()*10)+1;

        if (monsterResponse <= 2){
            dodge(hero, monster);
        } else if ((monsterResponse < 6) && (monsterResponse >2)) {
            block(hero, monster);
        } else {
            attack(hero, monster);
            if (monster.health>0){
            attack(monster, hero);
            };
        }

    });

    dodgeBtnClick.on("click", function(){
        var monsterResponse = Math.floor(Math.random()*10)+1;

        if (monsterResponse <= 1){
            $("#heroEventLog").text(hero.name + " Dodged!");
            $("#enemyEventLog").text(monster.name + " Blocked!");            
        } else if ((monsterResponse < 3) && (monsterResponse >1)) {
            $("#heroEventLog").text(hero.name + " Dodged!");
            $("#enemyEventLog").text(monster.name + " Dodged!");
        } else {
            dodge(monster, hero);
        }
    });

    blockBtnClick.on("click", function(){
        var monsterResponse = Math.floor(Math.random()*10)+1;

        if (monsterResponse <= 1){
            $("#heroEventLog").text(hero.name + " Blocked!");
            $("#enemyEventLog").text(monster.name + " Blocked!");
        } else if ((monsterResponse < 3) && (monsterResponse >1)) {
            $("#heroEventLog").text(hero.name + " Blocked!");
            $("#enemyEventLog").text(monster.name + " Dodged!");
        } else {
            block(monster, hero);
        }
    });

   
    
    
});