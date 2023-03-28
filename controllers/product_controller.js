const { product, defect, productDefect, sequelize } = require('../models')

class ProductController {
    static async getByProducts(request, response) {
        try {
            let products = await product.findAll({
                order: [
                    ['id', 'asc']
                ]
            });
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
        try {
            const id = +request.params.id;
            const { product_name, category, status, defect_id } = request.body;

            let result = await product.update({
                product_name, category, status, defect_id
            }, { 
                where: { id } 
            });
            
            result[0] === 1 ?
                response.json({
                    message: `Product with an ID of ${id} has been updated`
                }) :
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
                response.json({
                    message: `Product with an ID of ${id} has been deleted`
                }) :
                response.json({
                    message: `Product with an ID of ${id} couldn't be deleted or wasn't found`
                });
        } catch(err) {
            response.json(err);
        }
    }

    static async getDefects(request, response) {
        try {
            const id = +request.params.id;
            let resultProductDefects = {};
            let defects = [];

            let result = await productDefect.findAll({
                where: {
                    productId: id
                },
                include: [ product, defect ]
            });

            if (result.length === 0) {
                result = await product.findByPk(id);
                
                resultProductDefects = {
                    ...result.dataValues,
                    defects
                }
            } else {
                defects = result.map((data) => {
                    return data.defect.dataValues;
                });

                resultProductDefects = {
                    ...result[0].product.dataValues,
                    defects
                }
            }

            response.json(resultProductDefects);
        } catch(err) {
            response.json(err);
        }
    }
}

module.exports = ProductController;