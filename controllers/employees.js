const express = require('express');
const router = express.Router();
const empList = require('../models/employees');

router.get('/list', function (req, res, next) {
    var empNames = [];
    for (let key in empList) {
        empNames.push(empList[key].name);
    }
    res.render('employees', { title: 'Employees', employees: empNames });
});

module.exports = router;