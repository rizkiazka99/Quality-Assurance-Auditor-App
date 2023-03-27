const defectRoute = require('express').Router();
const { DefectController } = require('../controllers');

defectRoute.get('/', DefectController.getByDefects);
defectRoute.get("/add", DefectController.addDefectPage);
defectRoute.post('/add', DefectController.addDefect);
defectRoute.get('/delete/:id', DefectController.deleteDefect)
defectRoute.post('/update/:id', DefectController.updateDefect)
defectRoute.get('/update/:id', DefectController.updateDefectPage)
defectRoute.get('/findByName/:name', DefectController.getDefectByName)
defectRoute.get('/findById/:id', DefectController.getDefectById) 


module.exports = defectRoute;