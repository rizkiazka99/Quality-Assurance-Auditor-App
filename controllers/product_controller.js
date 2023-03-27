const { product } = require('../models')

class ProductController {
    static async getByProducts(request, response) {
        try {
            let products = await product.findAll();
            response.json(products);
        } catch(err) { 
            response.json(err);
        }
    }

    static addProductPage(request, response) {

    }

    static async addProduct(request, response) {
        try {
            const { product_name, category, status, defect_id } = request.body;
            let result = await product.create({
                product_name, category, status, defect_id
            });
            response.json(result);
        } catch(err) {
            response.json(err);
        }
    }

    static updateProductPage(request, response) {

    }

    static async updateProduct(request, response) {

    }

    static async getProductById(request, response) {

    }

    static async deleteProduct(request, response) {

    }
}

module.exports = ProductController;