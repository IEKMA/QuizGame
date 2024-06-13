const router = require("express").Router();

const topicRoutes = require("./api/topic.routes");
const questionRoutes = require("./api/question.routes");

router.use("/topics", topicRoutes);
router.use("/questions", questionRoutes);

module.exports = router;
