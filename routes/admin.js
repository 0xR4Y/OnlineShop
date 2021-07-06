const express = require('express');
const path = require('path');

const rootDir = require('../util/path')

const router = express.Router();

const adminController = require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct );


// /admin/products => GET
router.get('/products', adminController.getProduct );


// /admin/product => POST
router.post('/add-product', adminController.postAddProduct );


module.exports = router;
