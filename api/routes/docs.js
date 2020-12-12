const express = require('express');
const router = express.Router();

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'storage/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})
 
const upload = multer({ storage: storage }).single('file')


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
  router.post('/', (req, res) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
          return res.status(500).json(err)
      } else if (err) {
          return res.status(500).json(err)
      }
 return res.status(200).send(req.file)

})
  });
  
  module.exports = router;