
npx sequelize-cli model:generate --name product --attributes product_name:string,category:string,status:string,defect_id:integer

npx sequelize-cli model:generate --name defect --attributes defect_name:string,type:string,area:string,suggestion:string,product_id:integer

npx sequelize-cli model:generate --name productDefect --attributes product_id:integer,defect_id:integer
