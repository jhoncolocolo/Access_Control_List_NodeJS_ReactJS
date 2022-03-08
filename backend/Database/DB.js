import {Sequelize} from 'sequelize'
import database from '../env.js'

const db = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql"
    }
);

export default db