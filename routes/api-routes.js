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
    app.get("/api/monster/:name", function (req, res) {
        console.log(req.params.name);
        db.monster.findOne({ where: {name: req.params.name }}).then(function (monsterData){
            console.log(monsterData);
            res.json(monsterData);
        });
    });
}






