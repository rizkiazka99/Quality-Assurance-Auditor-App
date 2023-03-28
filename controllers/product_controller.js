const { product, sequelize } = require('../models')

class ProductController {
    static async getByProducts(request, response) {
        try {
            let products = await product.findAll({
                order: [
                    ['id', 'asc']
                ]
            });
            response.render('product/productPage.ejs',{products})
        } catch(err) {
            response.json(err);
        }
    }

    static async addProductPage(request, response) {
        try {
            response.render('product/createProduct.ejs')

        } catch (err) {
            response.json(err)
        }

    }

    static async addProduct(request, response) {
        try {
            const { product_name, category, status } = request.body;
            let result = await product.create({
                product_name, category, status
            });
            response.redirect('/products')
        } catch(err) {
            response.json(err);
        }
    }

    static async updateProductPage(request, response) {
        try {
            const id = +request.params.id
            let products = await product.findByPk(id);
            
            response.render('product/updateProduct.ejs',{products})
            // console.log(products)
        } catch (err) {
            response.json(err);
        }

    }

    static async updateProduct(request, response) {
        try {
            const id = +request.params.id;
            const { product_name, category, status } = request.body;

            let result = await product.update({
                product_name, category, status
            }, { 
                where: { id } 
            });
            
            result[0] === 1 ?
            response.redirect('/products') :
                response.json({
                    message: `Product with an ID of ${id} couldn't be updated or wasn't found`
                });
        } catch(err) {
            response.json(err);
        }
    }

    static async getProductById(request, response) {
        try {
            const id = +request.params.id;

            let result = await product.findByPk(id);
            response.json(result);
        } catch(err) {
            response.json(err);
        }
    }

    static async getProductByName(request, response) {
        try {
            const name = request.params.name.toLowerCase();
            
            let result = await product.findAll({
                where: {
                    product_name: sequelize.where(sequelize.fn('LOWER', sequelize.col('product_name')), 'LIKE', '%' + name + '%')
                }
            });
            response.json(result);
        } catch(err) {
            response.json(err);
        }
    }

    static async deleteProduct(request, response) {
        try {
            const id = +request.params.id;

            let result = await product.destroy({
                where: { id }
            });

            result === 1 ?
            response.redirect('/products') :
                response.json({
                    message: `Product with an ID of ${id} couldn't be deleted or wasn't found`
                });
        } catch(err) {
            response.json(err);
        }
    }
}

module.exports = ProductController;