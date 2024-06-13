'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      'Questions', 
      [
        {
       question: 'question1',
       answer: 'answer1',
       topicId: 1,
       img: 'ImageURL',
     },
     {
      question: 'question2',
      answer: 'answer2',
      topicId: 1,
      img: 'ImageURL',
    },
    {
      question: 'question3',
      answer: 'answer3',
      topicId: 1,
      img: 'ImageURL',
    },
    {
      question: 'question4',
      answer: 'answer4',
      topicId: 1,
      img: 'ImageURL',
    },
    {
      question: 'question5',
      answer: 'answer5',
      topicId: 2,
      img: 'ImageURL',
    },
    {
      question: 'question6',
      answer: 'answer6',
      topicId: 2,
      img: 'ImageURL',
    },
    {
      question: 'question7',
      answer: 'answer7',
      topicId: 2,
      img: 'ImageURL',
    },
    {
      question: 'question8',
      answer: 'answer8',
      topicId: 2,
      img: 'ImageURL',
    },
    
    ], 
    {}
  );
    
  },

  async down (queryInterface, Sequelize) {
     
    await queryInterface.bulkDelete('Questions', null, {})
  }
};
