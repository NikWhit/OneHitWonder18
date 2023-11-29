const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
//README - Works Cited
//18-NoSQL/23-Ins_Subdoc-Population/Routes/Index.js
