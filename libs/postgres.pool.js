import pkg from 'pg';
import config from "../config/config.js";

const {Pool} = pkg;

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const pool = new Pool({connectionString:URI});

export default pool;
