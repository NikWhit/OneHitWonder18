const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  createThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:postId').get(getSingleThought);

module.exports = router;
