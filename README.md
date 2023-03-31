# Quality-Assurance-Auditor-App
CODE.ID Flutter + Node.js Fullstack Bootcamp Mini Project #1

# Documentation
## Products
1. localhost:3000/products/ (GET) => Get all products in the database

```json
[
    {
        "id": 3,
        "product_name": "Nike Air Force 1",
        "category": "Basketball ",
        "status": "Develop",
        "createdAt": "2023-03-28T08:13:36.415Z",
        "updatedAt": "2023-03-30T14:56:13.199Z"
    },
    {
        "id": 4,
        "product_name": "Nike Court Royal",
        "category": "Men/Women",
        "status": "Active",
        "createdAt": "2023-03-28T08:14:08.757Z",
        "updatedAt": "2023-03-28T08:14:08.757Z"
    },
    {
        "id": 5,
        "product_name": "Nike Court Vision",
        "category": "Men/Women",
        "status": "Develop",
        "createdAt": "2023-03-28T08:14:53.031Z",
        "updatedAt": "2023-03-28T08:14:53.031Z"
    },
    {
        "id": 6,
        "product_name": "Nike Md Runner",
        "category": "Kids",
        "status": "Active",
        "createdAt": "2023-03-28T08:15:11.643Z",
        "updatedAt": "2023-03-28T08:15:11.643Z"
    }
]
```
2. localhost:3000/products/add (POST) => Add a product into the database

```json
{
    "id": 8,
    "product_name": "Nike Vapor Lite",
    "category": "Tennis",
    "status": "Active",
    "updatedAt": "2023-03-30T22:35:45.354Z",
    "createdAt": "2023-03-30T22:35:45.354Z"
}
```

3. localhost:3000/products/update/:id (POST) => Update the referenced product by Primary Key (id)

```json
{
    "message": "Product with an ID of 5 has been updated"
}
```

4. localhost:3000/products/delete/:id (GET) => Delete the referenced product by Primary Key (id)

```json
{
    "message": "Product with an ID of 5 has been deleted"
}
```

5. localhost:3000/products/findById/:id (GET) => Get the referenced product by Primary Key (id)\

```json
{
    "id": 5,
    "product_name": "Nike Air Jordan 1",
    "category": "Basketball Shoes",
    "status": "Develop",
    "createdAt": "2023-03-28T08:14:53.031Z",
    "updatedAt": "2023-03-30T22:56:32.130Z"
}
```

6. localhost:3000/products/findByName/:name (GET) => Get the referenced product by matching product_name(s)

```json
[
    {
        "id": 3,
        "product_name": "Nike Air Force 1",
        "category": "Basketball ",
        "status": "Develop",
        "createdAt": "2023-03-28T08:13:36.415Z",
        "updatedAt": "2023-03-30T14:56:13.199Z"
    }
]
```
7. localhost:3000/products/getDefects/:id (GET) => Get all of the defects of the referenced product by Primary Key (id)

```json
{
    "id": 5,
    "product_name": "Nike Air Jordan 1",
    "category": "Basketball Shoes",
    "status": "Develop",
    "createdAt": "2023-03-28T08:14:53.031Z",
    "updatedAt": "2023-03-30T22:56:32.130Z",
    "defects": [
        {
            "id": 2,
            "defect_name": "Over-Cement",
            "type": "Moderate",
            "area": "Medial",
            "suggestion": "Chisel the excess cement",
            "createdAt": "2023-03-27T19:31:53.698Z",
            "updatedAt": "2023-03-30T15:08:46.214Z"
        }
    ]
}
```

## Defects
1. localhost:3000/defects/ (GET) => Get all defects in the database

```json
[
    {
        "id": 2,
        "defect_name": "Over-Cement",
        "type": "Moderate",
        "area": "Medial",
        "suggestion": "Chisel the excess cement",
        "createdAt": "2023-03-27T19:31:53.698Z",
        "updatedAt": "2023-03-30T15:08:46.214Z"
    },
    {
        "id": 3,
        "defect_name": "Thread End",
        "type": "Moderate",
        "area": "Eyelets",
        "suggestion": "",
        "createdAt": "2023-03-28T08:17:36.598Z",
        "updatedAt": "2023-03-30T15:11:07.439Z"
    },
    {
        "id": 4,
        "defect_name": "Color Migration",
        "type": "Severe",
        "area": "Midsole",
        "suggestion": null,
        "createdAt": "2023-03-28T08:18:00.903Z",
        "updatedAt": "2023-03-28T08:18:00.903Z"
    },
    {
        "id": 8,
        "defect_name": "Metal Contamination",
        "type": "Severe",
        "area": "Midsole",
        "suggestion": "-",
        "createdAt": "2023-03-30T15:14:34.180Z",
        "updatedAt": "2023-03-30T15:14:34.180Z"
    }
]
```

2. localhost:3000/defects/add (POST) => Add a defect into the database

```json
{
    "id": 9,
    "defect_name": "Stain",
    "type": "Minor",
    "area": "Vamp",
    "suggestion": null,
    "updatedAt": "2023-03-30T23:45:07.544Z",
    "createdAt": "2023-03-30T23:45:07.544Z"
}
```

3. localhost:3000/defects/update/:id (POST) => Update the referenced defect by Primary Key (id)

```json
{
    "message": "Defect with an ID of 5 has been updated"
}
```

4. localhost:3000/defects/delete/:id (GET) => Delete the referenced defect by Primary Key (id)

```json
{
    "message": "Defect with an ID of 5 has been updated"
}
```

5. localhost:3000/defects/findById/:id (GET) => Get the referenced defect by Primary Key (id)

```json
{
    "id": 9,
    "defect_name": "Stain",
    "type": "Minor",
    "area": "Vamp",
    "suggestion": null,
    "createdAt": "2023-03-30T23:45:07.544Z",
    "updatedAt": "2023-03-30T23:45:07.544Z"
}
```
6. localhost:3000/defects/findByName/:name (GET) => Get the referenced defect by product_name

```json
[
    {
        "id": 4,
        "defect_name": "Color Migration",
        "type": "Severe",
        "area": "Midsole",
        "suggestion": null,
        "createdAt": "2023-03-28T08:18:00.903Z",
        "updatedAt": "2023-03-28T08:18:00.903Z"
    },
    {
        "id": 2,
        "defect_name": "Over-Cement",
        "type": "Moderate",
        "area": "Medial",
        "suggestion": "Chisel the excess cement",
        "createdAt": "2023-03-27T19:31:53.698Z",
        "updatedAt": "2023-03-30T15:08:46.214Z"
    },
    {
        "id": 8,
        "defect_name": "Metal Contamination",
        "type": "Severe",
        "area": "Midsole",
        "suggestion": "-",
        "createdAt": "2023-03-30T15:14:34.180Z",
        "updatedAt": "2023-03-30T15:14:34.180Z"
    }
]
```

7. localhost:3000/defects/getProducts/:id (GET) => Get all of the products of the referenced defect by Primary Key (id)

```json
{
    "id": 4,
    "defect_name": "Color Migration",
    "type": "Severe",
    "area": "Midsole",
    "suggestion": null,
    "createdAt": "2023-03-28T08:18:00.903Z",
    "updatedAt": "2023-03-28T08:18:00.903Z",
    "products": [
        {
            "id": 3,
            "product_name": "Nike Air Force 1",
            "category": "Basketball ",
            "status": "Develop",
            "createdAt": "2023-03-28T08:13:36.415Z",
            "updatedAt": "2023-03-30T14:56:13.199Z"
        },
        {
            "id": 6,
            "product_name": "Nike Md Runner",
            "category": "Kids",
            "status": "Active",
            "createdAt": "2023-03-28T08:15:11.643Z",
            "updatedAt": "2023-03-28T08:15:11.643Z"
        }
    ]
}
```

## ProductDefects (Junction)
1. localhost:3000/productDefects/ (GET) => Get all ProductDefect in the database

```json
[
    {
        "id": 4,
        "productId": 5,
        "defectId": 2,
        "createdAt": "2023-03-28T17:08:46.440Z",
        "updatedAt": "2023-03-28T17:08:46.440Z",
        "product": {
            "id": 5,
            "product_name": "Nike Air Jordan 1",
            "category": "Basketball Shoes",
            "status": "Develop",
            "createdAt": "2023-03-28T08:14:53.031Z",
            "updatedAt": "2023-03-30T22:56:32.130Z"
        },
        "defect": {
            "id": 2,
            "defect_name": "Over-Cement",
            "type": "Moderate",
            "area": "Medial",
            "suggestion": "Chisel the excess cement",
            "createdAt": "2023-03-27T19:31:53.698Z",
            "updatedAt": "2023-03-30T15:08:46.214Z"
        }
    },
    {
        "id": 7,
        "productId": 3,
        "defectId": 3,
        "createdAt": "2023-03-29T08:28:47.863Z",
        "updatedAt": "2023-03-29T08:28:47.863Z",
        "product": {
            "id": 3,
            "product_name": "Nike Air Force 1",
            "category": "Basketball ",
            "status": "Develop",
            "createdAt": "2023-03-28T08:13:36.415Z",
            "updatedAt": "2023-03-30T14:56:13.199Z"
        },
        "defect": {
            "id": 3,
            "defect_name": "Thread End",
            "type": "Moderate",
            "area": "Eyelets",
            "suggestion": "",
            "createdAt": "2023-03-28T08:17:36.598Z",
            "updatedAt": "2023-03-30T15:11:07.439Z"
        }
    },
    {
        "id": 2,
        "productId": 3,
        "defectId": 4,
        "createdAt": "2023-03-28T11:01:07.269Z",
        "updatedAt": "2023-03-30T14:19:33.942Z",
        "product": {
            "id": 3,
            "product_name": "Nike Air Force 1",
            "category": "Basketball ",
            "status": "Develop",
            "createdAt": "2023-03-28T08:13:36.415Z",
            "updatedAt": "2023-03-30T14:56:13.199Z"
        },
        "defect": {
            "id": 4,
            "defect_name": "Color Migration",
            "type": "Severe",
            "area": "Midsole",
            "suggestion": null,
            "createdAt": "2023-03-28T08:18:00.903Z",
            "updatedAt": "2023-03-28T08:18:00.903Z"
        }
    },
    {
        "id": 10,
        "productId": 3,
        "defectId": 8,
        "createdAt": "2023-03-30T15:14:58.959Z",
        "updatedAt": "2023-03-30T15:14:58.959Z",
        "product": {
            "id": 3,
            "product_name": "Nike Air Force 1",
            "category": "Basketball ",
            "status": "Develop",
            "createdAt": "2023-03-28T08:13:36.415Z",
            "updatedAt": "2023-03-30T14:56:13.199Z"
        },
        "defect": {
            "id": 8,
            "defect_name": "Metal Contamination",
            "type": "Severe",
            "area": "Midsole",
            "suggestion": "-",
            "createdAt": "2023-03-30T15:14:34.180Z",
            "updatedAt": "2023-03-30T15:14:34.180Z"
        }
    },
    {
        "id": 3,
        "productId": 6,
        "defectId": 4,
        "createdAt": "2023-03-28T17:08:42.185Z",
        "updatedAt": "2023-03-30T16:26:31.250Z",
        "product": {
            "id": 6,
            "product_name": "Nike Md Runner",
            "category": "Kids",
            "status": "Active",
            "createdAt": "2023-03-28T08:15:11.643Z",
            "updatedAt": "2023-03-28T08:15:11.643Z"
        },
        "defect": {
            "id": 4,
            "defect_name": "Color Migration",
            "type": "Severe",
            "area": "Midsole",
            "suggestion": null,
            "createdAt": "2023-03-28T08:18:00.903Z",
            "updatedAt": "2023-03-28T08:18:00.903Z"
        }
    }
]
```

2. localhost:3000/productDefects/add (POST) => Add a ProductDefect into the database

```json
{
    "id": 11,
    "productId": 4,
    "defectId": 9,
    "updatedAt": "2023-03-31T00:17:36.068Z",
    "createdAt": "2023-03-31T00:17:36.068Z"
}
```

3. localhost:3000/productDefects/update/:id (POST) => Update the referenced ProductDefect by Primary Key (id)

```json
{
    "message": "ProductDefect with an ID of 5 has been updated"
}
```

4. localhost:3000/productDefects/delete/:id (GET) => Delete the referenced ProductDefect by Primary Key (id)

```json
{
    "message": "ProductDefect with an ID of 5 has been deleted"
}
```

5. localhost:3000/productDefects/product/search/:id (GET) => Get all of the defects of the referenced Product (in ProductDefects table) by productId

```json
{
    "id": 3,
    "product_name": "Nike Air Force 1",
    "category": "Basketball ",
    "status": "Develop",
    "createdAt": "2023-03-28T08:13:36.415Z",
    "updatedAt": "2023-03-30T14:56:13.199Z",
    "defects": [
        {
            "id": 8,
            "defect_name": "Metal Contamination",
            "type": "Severe",
            "area": "Midsole",
            "suggestion": "-",
            "createdAt": "2023-03-30T15:14:34.180Z",
            "updatedAt": "2023-03-30T15:14:34.180Z"
        },
        {
            "id": 3,
            "defect_name": "Thread End",
            "type": "Moderate",
            "area": "Eyelets",
            "suggestion": "",
            "createdAt": "2023-03-28T08:17:36.598Z",
            "updatedAt": "2023-03-30T15:11:07.439Z"
        },
        {
            "id": 4,
            "defect_name": "Color Migration",
            "type": "Severe",
            "area": "Midsole",
            "suggestion": null,
            "createdAt": "2023-03-28T08:18:00.903Z",
            "updatedAt": "2023-03-28T08:18:00.903Z"
        }
    ]
}
```
6. localhost:3000/productDefects/detailed (GET) => Get all products in the database along with their respective defects

```json
[
    {
        "id": 3,
        "product_name": "Nike Air Force 1",
        "category": "Basketball ",
        "status": "Develop",
        "createdAt": "2023-03-28T08:13:36.415Z",
        "updatedAt": "2023-03-30T14:56:13.199Z",
        "defects": [
            {
                "id": 3,
                "defect_name": "Thread End",
                "type": "Moderate",
                "area": "Eyelets",
                "suggestion": "",
                "createdAt": "2023-03-28T08:17:36.598Z",
                "updatedAt": "2023-03-30T15:11:07.439Z"
            },
            {
                "id": 4,
                "defect_name": "Color Migration",
                "type": "Severe",
                "area": "Midsole",
                "suggestion": null,
                "createdAt": "2023-03-28T08:18:00.903Z",
                "updatedAt": "2023-03-28T08:18:00.903Z"
            },
            {
                "id": 8,
                "defect_name": "Metal Contamination",
                "type": "Severe",
                "area": "Midsole",
                "suggestion": "-",
                "createdAt": "2023-03-30T15:14:34.180Z",
                "updatedAt": "2023-03-30T15:14:34.180Z"
            }
        ]
    },
    {
        "id": 4,
        "product_name": "Nike Court Royal",
        "category": "Men/Women",
        "status": "Active",
        "createdAt": "2023-03-28T08:14:08.757Z",
        "updatedAt": "2023-03-28T08:14:08.757Z",
        "defects": []
    },
    {
        "id": 5,
        "product_name": "Nike Air Jordan 1",
        "category": "Basketball Shoes",
        "status": "Develop",
        "createdAt": "2023-03-28T08:14:53.031Z",
        "updatedAt": "2023-03-30T22:56:32.130Z",
        "defects": [
            {
                "id": 2,
                "defect_name": "Over-Cement",
                "type": "Moderate",
                "area": "Medial",
                "suggestion": "Chisel the excess cement",
                "createdAt": "2023-03-27T19:31:53.698Z",
                "updatedAt": "2023-03-30T15:08:46.214Z"
            }
        ]
    },
    {
        "id": 6,
        "product_name": "Nike Md Runner",
        "category": "Kids",
        "status": "Active",
        "createdAt": "2023-03-28T08:15:11.643Z",
        "updatedAt": "2023-03-28T08:15:11.643Z",
        "defects": [
            {
                "id": 4,
                "defect_name": "Color Migration",
                "type": "Severe",
                "area": "Midsole",
                "suggestion": null,
                "createdAt": "2023-03-28T08:18:00.903Z",
                "updatedAt": "2023-03-28T08:18:00.903Z"
            }
        ]
    },
    {
        "id": 8,
        "product_name": "Nike Vapor Lite",
        "category": "Tennis",
        "status": "Active",
        "createdAt": "2023-03-30T22:35:45.354Z",
        "updatedAt": "2023-03-30T22:35:45.354Z",
        "defects": []
    }
]
```

