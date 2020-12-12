const express = require('express');
const app = express();
const cors = require('cors');

const docRoutes = require('./api/routes/docs')

app.use(cors());

/** Routes to handle requests */
app.use('/docs', docRoutes);

/** Handle Errors */
app.use((req, res, next)=>{
    const error = new Error('Not found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;
