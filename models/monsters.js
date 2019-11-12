module.exports = function(sequelize, DataTypes) {
    var monster = sequelize.define("monster", {

      name: DataTypes.STRING,
      health: DataTypes.INTEGER,
      attack: DataTypes.INTEGER,
      critMod: DataTypes.INTEGER,
      dodge: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
      block: DataTypes.INTEGER,
      alive: DataTypes.BOOLEAN,
      enemyChoice: DataTypes.BOOLEAN,
      characterPic: DataTypes.STRING
    },
    {timestamps: false},
    {allowNull:false}
    );

    return monster;

    
};
