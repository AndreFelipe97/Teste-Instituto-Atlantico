import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Models
import User from '../app/models/User';
import File from '../app/models/File';
import Firmware from '../app/models/Firmware';

const models = [User, File, Firmware];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
