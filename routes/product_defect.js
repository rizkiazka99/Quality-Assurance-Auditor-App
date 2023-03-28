const productDefectRoute = require('express').Router();
const { ProductDefectController } = require('../controllers')

productDefectRoute.get('/', ProductDefectController.getProductDefect)
productDefectRoute.post('/add', ProductDefectController.addProductDefect)
productDefectRoute.get('/delete/:id', ProductDefectController.deleteProduct);
productDefectRoute.get('/add', ProductDefectController.addProductDefectPage)

module.exports = productDefectRoute