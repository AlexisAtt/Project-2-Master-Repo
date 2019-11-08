module.exports = function(sequelize, DataTypes) {
    var hero = sequelize.define("hero", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      health: DataTypes.INTEGER,
      attack: DataTypes.INTEGER,
      critMod: DataTypes.INTEGER,
      dodge: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
      block: DataTypes.INTEGER,
      coin: DataTypes.INTEGER,
      alive: DataTypes.BOOLEAN,
      userChoice: DataTypes.BOOLEAN
   


    },
    {timestamps: false},
    {allowNull:false}
    );

    return hero;


};
