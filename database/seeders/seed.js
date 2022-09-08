'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Profiles', [
      {
        name: 'Administrador',
        admin: true,
        delete: true,
        admin: true,
        created_at: '2022-08-01 05:45:12'
      }
    ], {})


    await queryInterface.bulkInsert('Users', [
      {
        user: 'admin',
        pass: '7890',
        name: 'Felipe Chandía',
        profile_id: 1001,
        created_at: '2022-08-02 05:45:12'
      },
      {
        user: 'user',
        pass: '7890',
        name: 'User Test',
        profile_id: 1001,
        created_at: '2022-08-01 05:45:12'
      },
    ], {})


  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {})


  }
};
