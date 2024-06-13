'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Questions }) {
      this.hasMany(Questions, { foreignKey: 'topicId' })
    }
  }
  Topics.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Topics',
  });
  return Topics;
};