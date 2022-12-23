import express from "express";

const router = express.Router();

//Registration branch is querying teachers credit hours teaching

router.get("/creditHours", (req, res) => {
    res.send("Student list requested...");
})


//HR branch is querying teachers for monthly leaves

router.get("/monthlyLeaves", (req, res) => {
    res.send("Salary preparation by HR...");
})

export default router;