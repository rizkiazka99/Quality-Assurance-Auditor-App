const productDefectRoute = require('express').Router();
const { ProductDefectController } = require('../controllers')

productDefectRoute.get('/', ProductDefectController.getProductDefect)
productDefectRoute.post('/add', ProductDefectController.addProductDefect)
productDefectRoute.get('/delete/:id', ProductDefectController.deleteProduct);
productDefectRoute.get('/add', ProductDefectController.addProductDefectPage)
productDefectRoute.get('/product/search/:id', ProductDefectController.getDefectByProduct)

module.exports = productDefectRoute