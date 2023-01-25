import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import registerRoute from '../routes/registerRoute.js';
import AddHostelRouter from "../routes/addHostelrouter.js";
import authRouter from "../routes/LoginRoute.js";


//Database related Code below
const apiKey = "mongodb+srv://veer:048root@tanveer.oklrgpx.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery' , true);

mongoose.connect(apiKey , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("Connected to database "));

const app = express();

app.use(cors()); //Enable CORS for all routes

/*
is a piece of middleware that is used to parse the body of an incoming request
 if the body is in JSON format
 */
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded ( { extended: true } ));

// app.use("/signup", (req, res) => {
//     console.log("API hit.");
// })


app.use("/register", registerRoute);
app.use("/customer" , registerRoute);
app.use("/" , registerRoute);

app.use("/login",authRouter);


app.use("/customer/AddHostel" , AddHostelRouter);

app.listen(5000);  //sever will run on  this port 5000
console.log("Running...");