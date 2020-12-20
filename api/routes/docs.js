const express = require('express');
const router = express.Router();
const fs = require('fs');

const Tesseract = require('tesseract.js');

// const worker = createWorker({
//   logger: m => console.log(m), // Add logger here
// });

const multer = require('multer');
const { _router } = require('../..');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'storage/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
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
      // let image = fs.readFileSync('storage/uploads/'+req.file.originalname)
      // fs.readFile('storage/uploads/'+req.file.originalname, (err, data)=>{
      //   if(err) return console.log('The error is : ',err);
        // (async () => {
          // await worker.load();
          // await worker.loadLanguage('eng');
          // await worker.initialize('eng');
        //   const { data: { text } } = await worker.recognize(data);
        //   console.log(text);
        //   await worker.terminate();
        // })();  
        // return console.log(process.cwd()+'/storage/uploads/'+req.file.originalname)
        try {
          Tesseract
            .recognize(
              process.cwd()+'/storage/uploads/'+req.file.originalname,
              'eng',
              {logger: m => console.log(m)}
              )
            .then(({data:{text}})=>{
              // console.log(result)
              return res.json({NewText: text})
            })
          
        } catch (error) {
          console.log('Erreur : ',error)
        }

      // });

    })
  });
  
  module.exports = router;