const { productDefect, product, defect } = require('../models')

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
            const { productId, defectId } = request.body
            let result = await productDefect.create({
                productId : +productId, 
                defectId : +defectId
            })
            response.json(result)

        } catch (err) {
            response.json(err);

        }
        
    }
}

module.exports = ProductDefectController;