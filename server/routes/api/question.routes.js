const router = require("express").Router();
const { Question ,Topic } = require("");

router.get("/", async (req, res) => {
  try {
    const questions = await Question.findAll({ where: req.query });
    res.status(200).json({ message: "success", questions });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
router.get("/:questionId", async (req, res) => {
    try {
        const question = await Question.findone({ where:{id:questionId}, includes:Topic });
        res.status(200).json({ message: "success", question });
      } catch ({ message }) {
        res.status(500).json({ error: message });
      }
});