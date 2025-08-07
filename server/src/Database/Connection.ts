import { Sequelize } from "sequelize-typescript";
import User from './models/userModel'; 
import {config} from "dotenv"
config();
const sequelize = new Sequelize({
    database : process.env.DB_NAME,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    dialect : "mysql",
    port : Number(process.env.DB_PORT),
    models : [User] 
});

sequelize.authenticate()
.then(()=>{
    console.log("Database connected")
})
.catch((error)=>{
    console.log("Error connecting database:", error)
});

//migration code
sequelize.sync({alter:false})
.then(()=>{
    console.log("migrated succefully new changes")
});

export default sequelize