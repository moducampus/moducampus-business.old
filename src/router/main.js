const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.ejs', {
        title: "MODUCAMPUS TESTPAGE"
    });
});

module.exports = router