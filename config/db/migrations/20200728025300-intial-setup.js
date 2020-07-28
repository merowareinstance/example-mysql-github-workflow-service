module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    await queryInterface.createTable('tree', {
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
        created_at: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        }
    });

    await queryInterface.createTable('fruit', {
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
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
  });

  },

  down: () => {}
};
