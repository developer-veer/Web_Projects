import mongoose from "mongoose";

const userStructure = new mongoose.Schema(
    {
        firstName:String,
        lastName : String,
    }
);

export const userModel = mongoose.model('User' , userStructure);