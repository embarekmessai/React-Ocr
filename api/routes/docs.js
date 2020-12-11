const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/', (req, res) => {
    res.send('Hello World!')
})
  // define the about route
  router.get('/about', (req, res) => {
    res.send('About page');
  });
  
  module.exports = router;