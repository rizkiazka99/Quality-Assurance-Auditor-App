# Quality-Assurance-Auditor-App
CODE.ID Flutter + Node.js Fullstack Bootcamp Mini Project #1

# Documentation
- Products
1. localhost:3000/products/ (GET) => Get all products in the database
2. localhost:3000/products/add (POST) => Add a product into the database
3. localhost:3000/products/update/:id (POST) => Update the referenced product by Primary Key (id)
4. localhost:3000/products/delete/:id (GET) => Delete the referenced product by Primary Key (id)
5. localhost:3000/products/findById/:id (GET) => Get the referenced product by Primary Key (id)
6. localhost:3000/products/findByName/:name (GET) => Get the referenced product by product_name
7. localhost:3000/products/getDefects/:id (GET) => Get all of the defects of the referenced product by Primary Key (id)

- Defects
1. localhost:3000/defects/ (GET) => Get all defects in the database
2. localhost:3000/defects/add (POST) => Add a defect into the database
3. localhost:3000/defects/update/:id (POST) => Update the referenced defect by Primary Key (id)
4. localhost:3000/defects/delete/:id (GET) => Delete the referenced defect by Primary Key (id)
5. localhost:3000/defects/findById/:id (GET) => Get the referenced defect by Primary Key (id)
6. localhost:3000/defects/findByName/:name (GET) => Get the referenced defect by product_name
7. localhost:3000/defects/getProducts/:id (GET) => Get all of the products of the referenced defect by Primary Key (id)

- ProductDefects (Junction)
1. localhost:3000/productDefects/ (GET) => Get all ProductDefect in the database
2. localhost:3000/productDefects/add (POST) => Add a ProductDefect into the database
3. localhost:3000/productDefects/update/:id (POST) => Update the referenced ProductDefect by Primary Key (id)
4. localhost:3000/productDefects/delete/:id (GET) => Delete the referenced ProductDefect by Primary Key (id)
5. localhost:3000/productDefects/product/search/:id (GET) => Get all of the defects of the referenced ProductDefect by productId
6. localhost:3000/productDefects/detailed (GET) => Get all products in the database along with their respective defects

