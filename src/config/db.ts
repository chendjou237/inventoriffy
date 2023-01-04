import mongoose from 'mongoose'
//import environment variable
import { trace } from 'console'
import dotenv from "dotenv";
dotenv.config();
const db = process.env.DB_URI

const getConnection = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(db||'',  )
        console.log('MongoDB connected ');
        
        return mongoose.connection
    } catch (error) {
        console.log(error);
        
    }
}

export default getConnection