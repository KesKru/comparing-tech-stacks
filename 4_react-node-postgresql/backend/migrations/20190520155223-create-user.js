'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // up: (queryInterface, Sequelize) => {
  //   return queryInterface.removeColumn('Users', 'extra');
  // },
  // up: (queryInterface, Sequelize) => {
  //   return queryInterface.addColumn('Users', 'newCol', Sequelize.STRING, {
  //     after: 'email' // after option is only supported by MySQL
  //   });
  // },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
