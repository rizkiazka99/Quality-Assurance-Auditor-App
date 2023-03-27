const productRoute = require('express').Router();
const { ProductController } = require('../controllers');

productRoute.get('/', ProductController.getByProducts);
productRoute.get("/add", ProductController.addProductPage);
productRoute.post('/add', ProductController.addProduct);
productRoute.get("/update/:id", ProductController.updateProductPage);
productRoute.post('/update/:id', ProductController.updateProduct);
productRoute.get('/delete/:id', ProductController.deleteProduct);
productRoute.get('/findById/:id', ProductController.getProductById);
productRoute.get('/findByName/:name', ProductController.getProductByName);

module.exports = productRoute;
