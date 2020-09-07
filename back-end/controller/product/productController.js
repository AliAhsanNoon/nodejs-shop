const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    console.log('Get Product List');
    let data = ['Nodejs', 'JavaScript', 'C#', 'Angular', 'React.js', '.NET CORE'];

    res.send(data)
});

router.post('/', function(req,res){
    console.log('Save Product');
    console.log('Insert => ', req.body);
    res.send(data)
});

module.exports = router;