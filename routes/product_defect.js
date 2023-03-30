const productDefectRoute = require('express').Router();
const { ProductDefectController } = require('../controllers');

productDefectRoute.get('/', ProductDefectController.getProductDefect);
productDefectRoute.get("/add", ProductDefectController.addProductDefectPage)
productDefectRoute.post('/add', ProductDefectController.addProductDefect);
productDefectRoute.get('/delete/:id', ProductDefectController.deleteProductDefect);

module.exports = productDefectRoute