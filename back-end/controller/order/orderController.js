const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    console.log('Get Order List');
    let data = ['Oder 1', 'Oder 2', 'Oder 3', 'Oder 4', 'Oder 5',];

    res.send(data)
});

router.post('/', function(req,res){
    console.log('Save Order');
    console.log('Insert => ', req.body);
    res.send(data)
});

module.exports = router;