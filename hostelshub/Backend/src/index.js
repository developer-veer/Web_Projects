import mongoose from "mongoose";
import express from 'express';
//import register from "../routes/register.js";
const apiKey = "mongodb+srv://veer:048root@tanveer.oklrgpx.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery' , true);

mongoose.connect(apiKey , {
    useNewUrlParser : true,
    useUnifiedTopology: true,
}).then(()=> console.log("Connected to database "));


const app = express();


app.use("/register",(data)=>{
    console.log("React request is reached.." + data);
});
app.listen(3001 , () => console.log("Server is listning..."));