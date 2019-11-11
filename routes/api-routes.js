//

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

    
}






