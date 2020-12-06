const express = require('express');
const { nextTick } = require('process');
const cors = require('cors');
const router = express.Router();
const corsOpts = {
    origin: '*',
  };

router.get('/',cors(corsOpts), (req, res) => {
    res.send('The server is up and running.');
})


module.exports = router;