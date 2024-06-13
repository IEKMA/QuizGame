const router = require("express").Router();
const { Topics, Questions } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const topics = await Topics.findAll();
    res.status(200).json({ message: "success", topics });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
router.get("/:topicId/questions", async (req, res) => {
  try {
    const {topicId} = req.params
    const topic = await Questions.findAll({
      where: { topicId: topicId }});
    res.status(200).json({ message: "success", topic });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
