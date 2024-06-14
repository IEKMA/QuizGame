const router = require('express').Router();
const { Questions } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const questions = await Questions.findAll();
    res.status(200).json({ message: 'success', questions });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('req parms', id);
    const question = await Questions.findByPk(+id);

    res.status(200).json({ message: 'success', question });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
