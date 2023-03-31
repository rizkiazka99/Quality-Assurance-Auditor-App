const productDefectRoute = require('express').Router();
const { ProductDefectController } = require('../controllers');

productDefectRoute.get('/', ProductDefectController.getProductDefect);
productDefectRoute.post('/add', ProductDefectController.addProductDefect);
productDefectRoute.get('/delete/:id', ProductDefectController.deleteProductDefect);
productDefectRoute.get('/add', ProductDefectController.addProductDefectPage);
productDefectRoute.get('/product/search/:id', ProductDefectController.getDefectByProduct);
productDefectRoute.get('/update/:id', ProductDefectController.updateProductDefectPage);
productDefectRoute.post('/update/:id', ProductDefectController.updateProductDefect);
productDefectRoute.get('/detailed', ProductDefectController.getProductsDefects);

module.exports = productDefectRoute