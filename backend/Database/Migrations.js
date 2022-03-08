import sequelize from "./DB.js";
import configuration from './Configurations.js';

export const generateMigrations = ()=> {
    // Connection whit data base for migration
    // Force true: DROP TABLES
    sequelize.sync({ force: false }).then(() => {
        console.log("Connection With Data Base");
    }).catch(error => {
        console.log('An error has occurred', error);
    })
}