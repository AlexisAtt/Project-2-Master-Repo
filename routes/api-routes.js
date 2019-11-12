var db = require("../models")

module.exports = function(app) {
    app.get("/api/heros", function (req, res) {
        db.hero.findAll({}).then(function(herosData){
            res.json(herosData);
        });
    });

    app.get("/api/monsters", function (req, res) {
        db.monster.findAll({}).then(function(monsterData){
            res.json(monsterData);
        });
    });

    //call table data by character name
    app.get("/api/hero/:id", function (req, res){
        console.log(req.params.id);
        db.hero.findOne({ where: {id: req.params.id }}).then(function (heroData){
            console.log(heroData);
            res.json(heroData);
        })
        
    });

    app.get("/api/heroChoice/:userChoice", function (req, res){
        console.log(req.params.userChoice);
        db.hero.findOne({ where: {userChoice: req.params.userChoice}}).then(function (userChoiceData){
            console.log(userChoiceData);
            res.json(userChoiceData);
        })
        
    });


    app.put("/api/hero/:id", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.id)
        console.log(req.body.userChoice)
        db.hero.update({
          id: req.params.id,
          userChoice: req.body.userChoice
        }, {
          where: {
            id: req.params.id
          }
        }).then(function(data) {
          res.json(data);
        });
      });

      app.put("/api/heroAttacked/:userChoice", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.id)
        console.log(req.body.userChoice)
        db.hero.update({
          id: req.params.id,
          health: req.body.health
        }, {
          where: {
            userChoice: req.params.userChoice
          }
        }).then(function(data) {
          res.json(data);
        });
      });

      app.put("/api/heroLeveledUp/:userChoice", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.id)
        console.log(req.body.userChoice)
        db.hero.update({
          id: req.params.id,
          health: req.body.health,
          attack: req.body.attack,
          block: req.body.block,
          dodge: req.body.dodge,
          level: req.body.level,
          coin: req.body.coin
        }, {
          where: {
            userChoice: req.params.userChoice
          }
        }).then(function(data) {
          res.json(data);
        });
       });

      app.put("/api/heroDied/:userChoice", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.id)
        console.log(req.body.userChoice)
        db.hero.update({
          id: req.params.id,
          alive: req.body.alive
        }, {
          where: {
            userChoice: req.params.userChoice
          }
        }).then(function(data) {
          res.json(data);
        });
      });


    app.get("/api/monster/:id", function (req, res) {
        console.log(req.params.id);
        db.monster.findOne({ where: {id: req.params.id }}).then(function (monsterData){
            console.log(monsterData);
            res.json(monsterData);
        });
    });

    app.get("/api/monsterChoice/:enemyChoice", function (req, res){
        console.log(req.params.enemyChoice);
        db.monster.findOne({ where: {enemyChoice: req.params.enemyChoice}}).then(function (enemyChoiceData){
            console.log(enemyChoiceData);
            res.json(enemyChoiceData);
        })
        
    });

    app.put("/api/monster/:id", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.id)
        console.log(req.body.enemyChoice)
        db.monster.update({
          id: req.params.id,
          enemyChoice: req.body.enemyChoice
        }, {
          where: {
            id: req.params.id
          }
        }).then(function(data) {
          res.json(data);
        });
      });

      app.put("/api/monsterAttacked/:enemyChoice", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.id)
        console.log(req.body.enemyChoice)
        db.monster.update({
          id: req.params.id,
          health: req.body.health
        }, {
          where: {
            enemyChoice: req.params.enemyChoice
          }
        }).then(function(data) {
          res.json(data);
        });
      });

      app.put("/api/monsterDied/:enemyChoice", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.id)
        console.log(req.body.enemyChoice)
        db.monster.update({
          id: req.params.id,
          alive: req.body.alive
        }, {
          where: {
            enemyChoice: req.params.enemyChoice
          }
        }).then(function(data) {
          res.json(data);
        });
      });

      app.put("/api/monsterUnselect/:enemyChoice", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.id)
        console.log(req.body.enemyChoice)
        db.monster.update({
          id: req.params.id,
          enemyChoice: req.body.enemyChoice
        }, {
          where: {
            enemyChoice: req.params.enemyChoice
          }
        }).then(function(data) {
          res.json(data);
        });
      });

    
}




/*
var db = require("../models")

module.exports = function(app) {
    app.get("/api/heros", function (req, res) {
        db.hero.findAll({}).then(function(herosData){
            res.json(herosData);
        });
    });

    app.get("/api/monsters", function (req, res) {
        db.monster.findAll({}).then(function(monsterData){
            res.json(monsterData);
        });
    });

    //call table data by character name
    app.get("/api/hero/:name", function (req, res){
        console.log(req.params.name);
        db.hero.findOne({ where: {name: req.params.name }}).then(function (heroData){
            console.log(heroData);
            res.json(heroData);
        })
        
    });


    app.put("/api/hero/:name", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.params.name)
        console.log(req.body.userChoice)
        db.hero.update({
          name: req.params.name,
          userChoice: req.body.userChoice
        }, {
          where: {
            name: req.params.name
          }
        }).then(function(data) {
          res.json(data);
        });
      });
    app.get("/api/monster/:name", function (req, res) {
        console.log(req.params.name);
        db.monster.findOne({ where: {name: req.params.name }}).then(function (monsterData){
            console.log(monsterData);
            res.json(monsterData);
        });
    });

    app.get("/api/herochoice/:userChoice", function (req, res){
        console.log(req.params.userChoice);
        db.hero.findOne({ where: {userChoice: req.params.userChoice }}).then(function (result){
            console.log(result);
            res.json(result);
        })
        
    });
    
}



*/




