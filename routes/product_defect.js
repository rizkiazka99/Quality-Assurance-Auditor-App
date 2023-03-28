const productDefectRoute = require('express').Router();
const { ProductDefectController } = require('../controllers');

productDefectRoute.get('/', ProductDefectController.getProductDefect);
productDefectRoute.post('/add', ProductDefectController.addProductDefect);
productDefectRoute.get('/delete/:id', ProductDefectController.deleteProductDefect);

module.exports = productDefectRoute