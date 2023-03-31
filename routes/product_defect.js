const productDefectRoute = require('express').Router();
const { ProductDefectController } = require('../controllers');

productDefectRoute.get('/', ProductDefectController.getProductDefect);
productDefectRoute.get('/detailed', ProductDefectController.getProductsDefects);
productDefectRoute.get("/add", ProductDefectController.addProductDefectPage)
productDefectRoute.post('/add', ProductDefectController.addProductDefect);
productDefectRoute.get('/delete/:id', ProductDefectController.deleteProductDefect);
productDefectRoute.get('/product/search/:id', ProductDefectController.getDefectByProduct)
productDefectRoute.get('/update/:id', ProductDefectController.updateProductDefectPage)
productDefectRoute.post('/update/:id', ProductDefectController.updateProductDefect)

module.exports = productDefectRoute