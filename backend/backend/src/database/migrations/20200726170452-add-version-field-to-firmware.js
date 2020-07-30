module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn(
    'firmwares',
    'version',
    {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'version',
    },
  ),

  down: async (queryInterface) => queryInterface.removeColumn('firmwares', 'version'),
};
