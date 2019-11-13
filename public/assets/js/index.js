$(document).ready(function() {
    var playBtn = $("#playbtn");

    playBtn.on("click", function(){
        $.ajax({
            method: "POST",
            url: "/api/herosCreate",
            data: {
                id: 1,
                name: "The Autumn Archer",
                health: 70,
                attack: 20,
                critMod: 4,
                level: 1,
                dodge: 50,
                block: 2,
                coin: 5,
                alive: true,
                userChoice: false,
                characterPic: "./assets/images/characters/archerPic.png"
            }
        }).then(function(){
            console.log("Hero Created")
        });

        $.ajax({
            method: "POST",
            url: "/api/herosCreate",
            data: {
                id: 2,
                name: "The Noble Knight",
                health: 100,
                attack: 20,
                critMod: 1,
                level: 1,
                dodge: 2,
                block: 20,
                coin: 5,
                alive: true,
                userChoice: false,
                characterPic: "./assets/images/characters/knightPic.png"
            }
        }).then(function(){
            console.log("Hero Created")
        });

        $.ajax({
            method: "POST",
            url: "/api/herosCreate",
            data: {
                id: 3,
                name: "The Scarlet Rogue",
                health: 75,
                attack: 10,
                critMod: 2,
                level: 1,
                dodge: 30,
                block: 10,
                coin: 5,
                alive: true,
                userChoice: false,
                characterPic: "./assets/images/characters/roguePic.png"
            }
        }).then(function(){
            console.log("Hero Created")
        });

        $.ajax({
            method: "POST",
            url: "/api/herosCreate",
            data: {
                name: "The Mystic Mage",
                id: 4,
                health: 80,
                attack: 30,
                critMod: 3,
                level: 1,
                dodge: 10,
                block: 10,
                coin: 5,
                alive: true,
                userChoice: false,
                characterPic: "./assets/images/characters/magePic.png"
            }
        }).then(function(){
            console.log("Hero Created")
        });

        $.ajax({
            method: "POST",
            url: "/api/monstersCreate",
            data: {
                id: 1,
                name: "Ghastly Goblin",
                health: 10,
                attack: 5,
                critMod: 1,
                level: 1,
                dodge: 1,
                block: 3,
                alive: true,
                enemyChoice: false,
                characterPic: "./assets/images/characters/monster1Pic.png"
            }
        }).then(function(){
            console.log("Monster Created")
        });

        $.ajax({
            method: "POST",
            url: "/api/monstersCreate",
            data: {
                id: 2,
                name: "Azure Lion",
                health: 150,
                attack: 15,
                critMod: 2,
                level: 2,
                dodge: 5,
                block: 9,
                alive: true,
                enemyChoice: false,
                characterPic: "./assets/images/characters/monster2Pic.png"
            }
        }).then(function(){
            console.log("Monster Created")
        });

        $.ajax({
            method: "POST",
            url: "/api/monstersCreate",
            data: {
                id: 3,
                name: "Ravenous Ogre",
                health: 300,
                attack: 30,
                critMod: 3,
                level: 3,
                dodge: 10,
                block: 15,
                alive: true,
                enemyChoice: false,
                characterPic: "./assets/images/characters/monster3Pic.png"
            }
        }).then(function(){
            console.log("Monster Created")
        });

        $.ajax({
            method: "POST",
            url: "/api/monstersCreate",
            data: {
                id: 4,
                name: "Sadistic Sorcerer",
                health: 500,
                attack: 40,
                critMod: 10,
                level: 4,
                dodge: 30,
                block: 20,
                alive: true,
                enemyChoice: false,
                characterPic: "./assets/images/characters/monster4Pic.png"
            }
        }).then(function(){
            console.log("Monster Created")
        });

        
    })
})