"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Для чего это",
          img: "https://kick-or-die.ru/app/uploads/2023/05/photo_2023-05-15_14-17-11.jpg",
        },
        {
          title: "Happy Birthday",
          img: "https://avatars.mds.yandex.net/i?id=d12dd87483325add615118e3e3783bc567202ebb-9853580-images-thumbs&n=13",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
