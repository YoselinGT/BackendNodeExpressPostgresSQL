import Sequelize from "sequelize";
import config from "../config/config.js";
import setupModels from "../db/models/index.js";


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mariadb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

console.log(URI)


const sequelize = new Sequelize(URI,{
    dialect: 'mariadb',
    logging: true
});

console.log("llegamos al sequelize");
setupModels(sequelize);
sequelize.sync();
console.log("llegamos al sequelize");

export default sequelize;