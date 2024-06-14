"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "что за гаджет?",
          answer: "сумка для багета",
          topicId: 1,
          img: "/img/baget.jpeg",
        },
        {
          question: "что за гаджет?",
          answer: "миска для ленивых",
          topicId: 1,
          img: "/img/miska.jpeg",
        },
        {
          question: "от чего спасают носки ?",
          answer: "крик",
          topicId: 1,
          img: "/img/noski.jpeg",
        },
        {
          question: "кому помогут эти очки?",
          answer: "рассеянный",
          topicId: 1,
          img: "/img/oshki.jpeg",
        },
        {
          question: "что делает собака?",
          answer: "ставит лайки",
          topicId: 1,
          img: "/img/palets.jpeg",
        },
        {
          question: "что подарить человку, у которого все есть",
          answer: "шкафчик для носков",
          topicId: 1,
          img: "/img/shkaf.jpeg",
        },
        {
          question: "кому понадобится этот девайс ?",
          answer: "студенты Эльбруса",
          topicId: 1,
          img: "/img/slezy.jpeg",
        },
        {
          question: "Кто сегодня именник, ставит соки в холодильник ?",
          answer: "Олежка",
          topicId: 2,
          img: "https://avatars.mds.yandex.net/i?id=ae6f8ce0022876bff6bd8077510a5f27acc2aaaa-10685755-images-thumbs&n=13",
        },
        {
          question: "Кто раньше приносил подарки на день рождения",
          answer: "Праздничный гусь",
          topicId: 2,
          img: "https://avatars.mds.yandex.net/i?id=4fb12c099298bf28f49dada42cbb0af5b3f3c2eb-3816297-images-thumbs&n=13",
        },
        {
          question: "В нашей стране именинника тянут за уши. А в какой стране есть такой же обычай?",
          answer: "Англия",
          topicId: 2,
          img: "https://avatars.dzeninfra.ru/get-zen_doc/1577780/pub_5dcac3c472b73d07e87e3a41_5dcb4a54fdc2160328be5912/scale_1200",
        },
        {
          question: "В какой стране впервые вставили свечи в торт ?",
          answer: "Германия",
          topicId: 2,
          img: "https://avatars.mds.yandex.net/i?id=5285cf40cf08149d0b09fa32356539222a0a4fa8-12941940-images-thumbs&n=13",
        },
        {
          question: "Что  советует интернет подарить именнику на 22 года ?",
          answer: "капуста",
          topicId: 2,
          img: "https://static.alltime.ru/obj/article/image-blog/Podarok_parnyu_na_22/Podarok_parnyu_na_22_2.jpg",
        },
        
        {
          question: "Лучшая локация для празднования день рождения ?",
          answer: "Эльбрус",
          topicId: 2,
          img: "https://avatars.mds.yandex.net/get-altay/11393517/2a0000018d82940416cba111d54d6cd4f8bb/XXXL",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
