const productRoute = require('express').Router();
const { ProductController } = require('../controllers');

productRoute.get('/', ProductController.getByProducts);
productRoute.get("/add", ProductController.addProductPage);
productRoute.post('/add', ProductController.addProduct);

module.exports = productRoute; 