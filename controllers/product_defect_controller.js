const { productDefect, product, defect } = require('../models');

class ProductDefectController {
    static async getProductDefect(request, response) {
        try {
            let productDefects = await productDefect.findAll({
                include: [ product, defect ]
            });

            //response.json(productDefects)
            response.render('productDefect/product_defect_page.ejs', { productDefects });
        } catch(err) {
            response.json(err);
        }
    }

    static async getProductsDefects(request, response) {
        try {
            let products = await product.findAll({
                order: [
                    ['id', 'asc']
                ]
            });

            let defectsPerProduct = [];
            let defects = [];
            let result = {};
            let productDefects;

            for(let i = 0; i < products.length; i++) {
                productDefects = await productDefect.findAll({
                    where: {
                        productId: products[i].dataValues.id
                    },
                    include: [ product, defect ],
                });

                
                defects = productDefects.map((pd) => {
                    return pd.defect.dataValues;
                });

                result = {
                    defects
                }

                defectsPerProduct.push(result)
            }

            let productsDefectsResult = [];

            for(let j = 0; j < products.length; j++) {
                for(let k = 0; k < defectsPerProduct.length; k++) {
                    if (j === k) {
                        productsDefectsResult.push({
                            ...products[j].dataValues,
                            ...defectsPerProduct[k]
                        });
                    }
                }
            }
            
            //response.json(productsDefectsResult);
            response.render('productDefect/products_defects_page.ejs', { productsDefectsResult });
        } catch (err) {
            console.log(err)
            response.json(err);
        }
    }

    static async getDefectByProduct (request, response) {
        try {
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
            let results = {
                ...products,
                defects
            }

            //response.json(results);
            response.render('productDefect/history_product_defect.ejs', { results });
        } catch (err) {
            response.json(err)
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
            let result;
            
            if (isArray === true) {
                for(let i = 0; i < defectId.length; i++) {
                    result = await productDefect.create({
                        productId: +productId,
                        defectId: +defectId[i]
                    });
                }
            } else {
                result = await productDefect.create({
                    productId: +productId,
                    defectId: +defectId
                });
            }
            
            //response.json(result);
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

    static async updateProductDefectPage(request, response) {
        try {
            const id = +request.params.id
            let results = await productDefect.findByPk((id),{
                include: [ product, defect ],

            });

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

            let productDefects = {
                ...results.dataValues,
                products,
                defects
            }

            
            
            // response.json(results)
            //response.json(productDefects)
            response.render('productDefect/update_product_defect.ejs',{productDefects})

        } catch (err) {
            response.json(err)
        }

    }

    static async updateProductDefect (request, response) {
        try {
            const id = +request.params.id

            const {productId, defectId} = request.body

            let result = await productDefect.update({
                productId, defectId
            }, { 
                where: { id } 
            });
            
            result[0] === 1 ?
                /*response.json({
                    message: `ProductDefect with an ID of ${id} has been deleted`
                })*/ response.redirect('/productDefects') :
                response.json({
                    message: `Product with an ID of ${id} couldn't be updated or wasn't found`
                });

        } catch (err) {
            response.json (err)
        }
    }
}

module.exports = ProductDefectController;