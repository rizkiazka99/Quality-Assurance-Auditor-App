const { productDefect, product, defect } = require('../models');
const { deleteProduct } = require('./product_controller');

class ProductDefectController {
    static async getProductDefect(request, response) {
        try { 
            let productDefects = await productDefect.findAll({
                include: [ product, defect ]
            });
            response.json(productDefects);
            
        } catch (err) {
            response.json(err);
        }
    }

    static async addProductDefect(request, response) {
        try {
            const { productId, defectId } = request.body;

            let result = await productDefect.create({
                productId: +productId,
                defectId: +defectId
            });
            response.json(result);

        } catch (err) {
            response.json(err);

        }
    }

    static async deleteProductDefect(request, response) {
        try {
            const id = +request.params.id;
            
            let result = await productDefect.destroy({
                where: { id }
            });

            result === 1 ?
                response.json({
                    message: `ProductDefect with an ID of ${id} has been deleted`
                }) : response.json({
                    message: `ProductDefect with an ID of ${id} couldn't be deleted or wasn't found`
                });
        } catch(err) {
            response.json(err);
        }
    }
}

module.exports = ProductDefectController;