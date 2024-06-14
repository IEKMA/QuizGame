"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Для чего это",
          img: "https://avatars.mds.yandex.net/i?id=e05d22075e8d637d7531e4d0f0026c7a0333146f-11526326-images-thumbs&n=13",
        },
        {
          title: "Happy Birthday",
          img: "https://avatars.mds.yandex.net/i?id=381dce9c5d5ac140cfe78f8eaa561f49f0b1bb0c-7545494-images-thumbs&n=13",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
