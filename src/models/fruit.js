const { Model } = require('sequelize');

class Fruit extends Model {
    static get colors() {
      return {
        RED: 'red',
        GREEN: 'green',
        BLUE: 'blue',
        ORANGE: 'orange'
      }
    }
    static associate(models) {
        Fruit.belongsTo(models.Tree, { foreignKey: 'tree_id' });
    }
    static init(sequelize, DataTypes) {
        return super.init(
          {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            type: {
                type: DataTypes.STRING,
                description: "Type of fruit"
            },
            color: {
                type: DataTypes.STRING,
                description: "The color of this"
            },
            tree_id: {
              type: DataTypes.INTEGER,
              description: "The tree id this fruit belongs to"
            }
          },
          { sequelize }
        );
      }
}

module.exports = Fruit;