const express = require('express');
const router = express.Router();

router.use('/product', require('../controller/product/productController'));
router.use('/order', require('../controller/order/orderController'));

module.exports = router;