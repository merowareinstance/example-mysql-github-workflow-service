const { Model } = require('sequelize');

class Tree extends Model {
    static associate(models) {
        Tree.hasMany(models.Fruit, { foreignKey: 'tree_id' });
    }

    static get types() {
        return {
            APPLE: 'appple',
            ORANGE: 'orange',
            PEAR: 'pear',
        }
    }

    static init(sequelize, DataTypes) {
        return super.init(
          {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            age: {
                type: DataTypes.INTEGER,
                description: "How long has this tree record been alive for"
            },
            type: {
                type: DataTypes.STRING,
                description: "Type of tree"
            },
          },
          { sequelize }
        );
      }
}

module.exports = Tree;