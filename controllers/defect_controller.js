const { defect, sequelize } = require('../models')
class DefectController {
    static async getByDefects(request, response) {
        try { 
let defects = await defect.findAll({
    order: [
        ['id', 'asc']
    ]
});
            response.render('defect/defectPage.ejs',{defects})
        } catch (err) {
            response.json(err);
        }
    }

    static addDefectPage(request, response) {
        try {
            response.render('defect/createDefect.ejs')
        } catch (err) {
            response.json(err);
        }
    }

    static async addDefect(request, response) {
        try {
            const { defect_name, type, area, suggestion } = request.body;
            let result = await defect.create({
                defect_name, type, area, suggestion
            });
            response.redirect('/defects')

        } catch (err) {
            response.json(err);
        }

    }

    static async updateDefectPage(request, response) {
        try {
            const id = +request.params.id
            let defects = await defect.findByPk(id);
            
            response.render('defect/updateDefect.ejs',{defects})
            // console.log(defects)
        } catch (err) {
            response.json(err);
        }

    }

    static async updateDefect(request, response) {
        try {
            const id = +request.params.id
            const { defect_name, type, area, suggestion } = request.body;
            let result = await defect.update({
                defect_name, type, area, suggestion 
            }, {
                where : { id }
            })

            result[0] === 1 ?
            response.redirect('/defects') :
                response.json({
                    message: `Id ${id} not updated`
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

           result === 1 ?
           response.redirect('/defects') :
            response.json({
                message: `id ${id} not deleted`
            });



        } catch (err) {
            response.json(err);
        }
    }
}

module.exports = DefectController;