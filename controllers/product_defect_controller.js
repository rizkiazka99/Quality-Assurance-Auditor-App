const { productDefect } = require('../models')
class ProductDefectController {
    static async getProductDefect(request, response) {
        try { 
            let productDefects = await productDefect.findAll()
            response.json(productDefects)
            
        } catch (err) {
            response.json(err)
        }

    }

    static async addProductDefect(request, response) {
        try {
            const { product_id, defect_id } = request.body
            let result = await productDefect.create({
                product_id : +product_id, 
                defect_id : +defect_id
            })
            response.json(result)

        } catch (err) {
            response.json(err)

        }
        
    }
}

module.exports = ProductDefectController;