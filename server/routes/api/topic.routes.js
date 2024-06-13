const router = require("express").Router();
const { Topic } = require("");

router.get("/", async (req, res) => {
  try {
    const topics = await Topic.findAll({ where: req.query });
    res.status(200).json({ message: "success", topics });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
router.get("/:topicsId", async (req, res) => {
    try {
        const topic = await Topic.findone({ where:{id:topicsId} });
        res.status(200).json({ message: "success", topic });
      } catch ({ message }) {
        res.status(500).json({ error: message });
      }
});
asdasdasdsadasdasdasdaadasdsaddassd

module.exports = router;
