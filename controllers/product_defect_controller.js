const { productDefect, product, defect } = require('../models')
const url = require('url')

class ProductDefectController {
    static async getProductDefect(request, response) {
        try { 
            let productDefects = await productDefect.findAll({
                include: [ product, defect ],
                order: [
                    ['createdAt', 'desc']
                ]
            });
            // response.json(productDefects)
            response.render('defectProduct/productDefectPage.ejs',{productDefects})
            
        } catch (err) {
            response.json(err);
        }

    }

    static async getDefectByProduct (request, response) {
        try{
            const id = +request.params.id;
            

                let productDefects = await productDefect.findAll({
                    where: {
                        productId: id
                    },
                    include : [product, defect],
                    order : [
                        ['createdAt','desc']
                    ]
                })
                let defects = await productDefects.map((item)=> {
                    return item.defect.dataValues
                })
    
                let products = productDefects[0].product.dataValues
                let results ={
                    ...products,
                    defects
                }
                response.render('defectProduct/historyProductDefect.ejs',{results})



        } catch (err) {
            response.json(err)
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
            response.redirect('defectProduct/productDefectPage') :
                response.json({
                    message: `Product with an ID of ${id} couldn't be deleted or wasn't found`
                });
        } catch(err) {
            response.json(err);
        }
    }
}

module.exports = ProductDefectController;