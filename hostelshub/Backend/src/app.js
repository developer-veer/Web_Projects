import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import students from "../routes/students.js";
import teachers from "../routes/teachers.js";


const app = express();

app.use(cors());
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded ( { extended: true } ));

app.use("/signup", (req, res) => {
    console.log("API hit.");
})


app.use("/undergrad/students", students);
app.use("/teachers", teachers);







app.get("/", (req, res) => {
    res.send("I am a home page. ");
})

app.listen(5000);
console.log("Running...");