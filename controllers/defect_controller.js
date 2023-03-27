const { defect } = require('../models')
class DefectController {
    static async getByDefects(request, response) {
        try { 
            let defects = await defect.findAll()
            response.json(defects)
        } catch (err) {
            response.json(err)
        }
    }

    static addDefectPage(request, response) {
        try {
            response.json({
                message : "Add Defect Page"
            })

        } catch (err) {
            response.json(err)
        }
    }

    static async addDefect(request, response) {
        try {
            const { defect_name, type, area, suggestion, product_id } = request.body;
            let result = await defect.create({
                defect_name, type, area, suggestion, product_id
            })
            response.json(result)

        } catch (err) {
            response.json(err)
        }

    }

    static updateDefectPage(request, response) {
        try {
            response.json({ 
                message: "UpdateDefectPage"
            })
        } catch (err) {
            response.json(err)
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
                response.json({
                    message: `Id ${id} has been updated`
                }) :
                response.json({
                    message: `Id ${id} not updated`
                })

        }catch (err) {
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
            const name = request.params.name.toLowerCase()
            console.log(name)

            let result = await defect.findAll({
                where : {
                    defect_name : name
                }
            })
            response.json(result)

        } catch (err) {
            response.json(err)

        } 

    }

    static async deleteDefect(request, response) {
        try { 
            const id = +request.params.id

            let result = await defect.destroy({
                where : { id }
            })

           result === 1 ?
            response.json({
                message: `Id ${id} deleted`
            }) :
            response.json({
                message: `id ${id} not deleted`
            })



        } catch (err) {
            response.json(err)
        }

    }
}

module.exports = DefectController;