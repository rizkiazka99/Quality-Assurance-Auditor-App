const route = require('express').Router();

route.get('/', (request, response) => {
    /*response.json({
        message: 'Quality Assurance Auditor App'
    });*/
    response.render('index.ejs');
});

const productRoutes = require('./product.js');
const defectRoutes = require('./defect.js');
const productDefectRoutes = require('./product_defect.js');

route.use('/products', productRoutes);
route.use('/defects', defectRoutes);
route.use('/productDefects', productDefectRoutes);

module.exports = route;