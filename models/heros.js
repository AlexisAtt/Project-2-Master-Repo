module.exports = function(sequelize, DataTypes) {
    var hero = sequelize.define("hero", {
      name: DataTypes.STRING,
      health: DataTypes.INTEGER,
      attack: DataTypes.INTEGER,
      critMod: DataTypes.INTEGER,
      dodge: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
      block: DataTypes.INTEGER,
      coin: DataTypes.INTEGER,
      alive: DataTypes.BOOLEAN,
      userChoice: DataTypes.BOOLEAN,
      characterPic: DataTypes.STRING
    },
    {timestamps: false},
    {allowNull:false}
    );

    return hero;


};
