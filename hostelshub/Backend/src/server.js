import mongoose, { connect } from "mongoose";
import express from 'express';
const apiKey = "mongodb+srv://veer:root048@tanveer.oklrgpx.mongodb.net/?retryWrites=true&w=majority"

async function Connect()
{
    try{
        await mongoose.Connect(apiKey);
        console.log('Database is Connected..!');
    }catch(error){
        console.error(error);
    }
}

Connect();
const app = express();
app.listen(6000 , () => {console.log("Server is listning...")});