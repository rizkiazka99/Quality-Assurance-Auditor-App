const { productDefect, product, defect } = require('../models');
const { ProductController } = require('../controllers');

class ProductDefectController {
    static async getProductDefect(request, response) {
        try { 
            let productDefects = await productDefect.findAll({
                order: [
                    ['id', 'asc']
                ],
                include: [ product, defect ]
            });

            let defectPerProduct = null;

            for(let i = 0; i < productDefects.length; i++) {
                defectPerProduct = await ProductController.getDefects(productDefects[i].dataValues.id, request, response);
            }

            response.json(defectPerProduct)
            //response.json(productDefects);
            //response.render('productDefect/product_defect_page.ejs', { productDefects, defectPerProduct });
            
        } catch (err) {
            console.log('error')
            response.json(err);
        }
    }

    static async addProductDefectPage(request, response) {
        try {
            let products = await product.findAll({
                order: [
                    ['id', 'asc']
                ]
            });

            let defects = await defect.findAll({
                order: [
                    ['id', 'asc']
                ]
            });

            response.render('productDefect/create_product_defect.ejs', { products, defects });
        } catch(err) {
            response.json(err);
        }
    }

    static async addProductDefect(request, response) {
        try {
            const { productId, defectId } = request.body;
            let isArray = Array.isArray(defectId);
            
            if (isArray === true) {
                for(let i = 0; i < defectId.length; i++) {
                    await productDefect.create({
                        productId: +productId,
                        defectId: +defectId[i]
                    });
                }
            } else {
                let result = await productDefect.create({
                    productId: +productId,
                    defectId: +defectId
                });
            }
            
            response.redirect('/productDefects');
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
                /*response.json({
                    message: `ProductDefect with an ID of ${id} has been deleted`
                })*/ response.redirect('/productDefects') : response.json({
                    message: `ProductDefect with an ID of ${id} couldn't be deleted or wasn't found`
                });
        } catch(err) {
            response.json(err);
        }
    }
}

module.exports = ProductDefectController;