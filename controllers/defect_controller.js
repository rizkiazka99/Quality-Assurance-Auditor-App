const { defect, product, productDefect, sequelize } = require('../models')
class DefectController {
    static async getByDefects(request, response) {
        try { 
            let defects = await defect.findAll({
                order: [
                    ['id', 'asc']
                ]
            });
            //response.json(defects);
            response.render('defect/defect_page.ejs', { defects });
        } catch (err) {
            response.json(err);
        }
    }

    static addDefectPage(request, response) {
        try {
            response.render('defect/create_defect.ejs');
        } catch (err) {
            response.json(err);
        }
    }

    static async addDefect(request, response) {
        try {
            const { defect_name, type, area, suggestion, product_id } = request.body;
            
            let result = await defect.create({
                defect_name, type, area, suggestion, product_id
            });
            
            //response.json(result)
            response.redirect('/defects');
        } catch (err) {
            response.json(err);
        }

    }

    static async updateDefectPage(request, response) {
        try {
            const id = +request.params.id;

            let defects = await defect.findByPk(id);
            response.render('defect/update_defect.ejs', { defects });
        } catch (err) {
            console.log(err)
            response.json(err);
        }

    }

    static async updateDefect(request, response) {
        try {
            const id = +request.params.id
            const { defect_name, type, area, suggestion, product_id } = request.body;
            let result = await defect.update({
                defect_name, type, area, suggestion, product_id 
            }, {
                where : { id }
            })

            result[0] === 1 ?
                /*response.json({
                    message: `Defect with an ID of ${id} has been updated`
                })*/ response.redirect('/defects') :
                response.json({
                    message: `Defect with an ID of ${id} couldn't be updated or wasn't found`
                })

        } catch (err) {
            response.json(err)
        }
    }

    static async getDefectById(request, response) {
        try {
            const id = +request.params.id;

            let result = await defect.findByPk(id);
            response.json(result);
        } catch(err) {
            response.json(err);
        }
    }

    static async getDefectByName (request,response) {
        try {
            const name = request.params.name.toLowerCase();

            let result = await defect.findAll({
                where : {
                    defect_name : sequelize.where(sequelize.fn('LOWER', sequelize.col('defect_name')), 'LIKE', '%' + name + '%')
                }
            });
            response.json(result);

        } catch (err) {
            response.json(err);

        } 
    }

    static async deleteDefect(request, response) {
        try { 
            const id = +request.params.id

            let result = await defect.destroy({
                where : { id }
            });

            let productDefectResult = await productDefect.destroy({
                where: {
                    defectId: id
                }
            });

           result === 1 ?
            /*response.json({
                message: `Defect with an ID of ${id} has been deleted`
            })*/ response.redirect('/defects'):
            response.json({
                message: `Defect with an ID of ${id} couldn't be deleted or wasn't found`
            });
        } catch (err) {
            response.json(err);
        }
    }

    static async getProducts(request, response) {
        try {
            const id = +request.params.id;
            let products = [];
            let resultProducts = {};
            
            let result = await productDefect.findAll({
                where: {
                    defectId: id
                },
                include: [ product, defect ]
            });

            if (result.length === 0) {
                result = await this.getDefectById(id);

                resultProducts = {
                    ...result.dataValues,
                    products
                }
            } else {
                products = result.map((data) => {
                    return data.product.dataValues;
                });

                resultProducts = {
                    ...result[0].defect.dataValues,
                    products
                }
            }

            response.json(resultProducts);
        } catch(err) {
            response.json(err);
        }
    }
}

module.exports = DefectController;