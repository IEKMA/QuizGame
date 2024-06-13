'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      'Topics', 
      [
        {
       title: 'title1',
       img: 'ImageURL',
     },
     {
      title: 'title2',
       img: 'ImageURL',
    },
    
    ], 
    {}
  );
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Topics', null, {})
  }
};
