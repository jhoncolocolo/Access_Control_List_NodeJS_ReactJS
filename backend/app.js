import express from "express";
import cors from 'cors';
import enviroment from './env.js'
import AppRoutes from "./Routes/Routes.js"
import {generateMigrations} from './Database/Migrations.js';

const app = express()
app.use(cors())
app.use(express.json())
app.use('/',AppRoutes)
//global.refreshTokens = [];

// Setting
const PORT = enviroment.PORT

// Start The Sever
app.listen(PORT, function () {
    console.log(`Please Go To Next Route http://localhost:${enviroment.PORT}`);
    //3 Parameter was send of Console
    if(process.argv[2] == "createDatabase"){
        generateMigrations()
    }
});