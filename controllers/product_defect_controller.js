const { productDefect, product, defect } = require('../models')

class ProductDefectController {
    static async getProductDefect(request, response) {
        try { 
            let productDefects = await productDefect.findAll({
                include: [ product, defect ]
            });
            // response.json(productDefects)
            response.render('defectProduct/productDefectPage.ejs',{productDefects})
            
        } catch (err) {
            response.json(err);
        }

    }

    static async addProductDefectPage(request, response) {
        try {
            response.render('defectProduct/createProductDefect.ejs')

        } catch (err) {
            response.json(err)
        }

    }


    static async addProductDefect(request, response) {
        try {
            const { productId, defectId } = request.body
            let result = await productDefect.create({
                productId : +productId, 
                defectId : +defectId
            })
            response.redirect('/productDefects')

        } catch (err) {
            response.json(err);

        }
        
    }
    static async deleteProduct(request, response) {
        try {
            const id = +request.params.id;

            let result = await productDefect.destroy({
                where: { id }
            });

            result === 1 ?
            response.json({
                Message: 'already deleted'
            }) :
                response.json({
                    message: `Product with an ID of ${id} couldn't be deleted or wasn't found`
                });
        } catch(err) {
            response.json(err);
        }
    }
}

module.exports = ProductDefectController;