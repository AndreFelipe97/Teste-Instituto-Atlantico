import Sequelize, { Model } from 'sequelize';

class Firmware extends Model {
  static init(sequelize) {
    super.init({
      project: Sequelize.STRING,
      board: Sequelize.STRING,
      version: Sequelize.STRING,
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (firmware) => {
      firmware.version = `v${firmware.version}`;
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'file_id', as: 'file' });
  }
}

export default Firmware;
