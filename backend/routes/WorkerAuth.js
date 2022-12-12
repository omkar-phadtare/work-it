const express = require('express');
const router = express.Router();
const workerData = require('../models/Worker')

router.post('/',(req,res)=>{

    const w = new workerData(req.body);
    w.save();
    console.log(w);
})

module.exports = router