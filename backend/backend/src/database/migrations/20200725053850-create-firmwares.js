module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('firmwares', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
      },
      project: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'project',
      },
      board: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'board',
      },
      file_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'files', key: 'id',
        },
        allowNull: true,
        field: 'file_id',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('firmwares');
  },
};
