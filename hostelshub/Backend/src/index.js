import mongoose from "mongoose";
import express from 'express';
const apiKey = "mongodb+srv://veer:048root@tanveer.oklrgpx.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery' , true);
mongoose.connect(apiKey , {
    useNewUrlParser : true,
    useUnifiedTopology: true,
}).then(()=> console.log("Connected to database "));
const app = express();
app.listen(3000 , () => console.log("Server is listning..."));