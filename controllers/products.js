const express = require('express');
const router = express.Router();
const prodList = require('../models/products');

router.get('/list', function (req, res, next) {
    var prodNames = [];
    for (let key in prodList) {
        prodNames.push(prodList[key].name);
    }
    res.render('products', { title: 'Products', products: prodNames });
});

module.exports = router;