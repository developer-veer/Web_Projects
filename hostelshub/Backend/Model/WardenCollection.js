import mongoose from "mongoose";
import autoincrement from "mongoose-auto-increment";
//import express from 'express';

//const app = express();
autoincrement.initialize(mongoose.connection);

const wardenSchema = new mongoose.Schema({
    
    fullName: String,
    Email:String,
    Age:Number,
    Password : String ,
    ConfirmPassword : String ,
    Address: String ,
    auth :String ,
    
  });

wardenSchema.plugin(autoincrement.plugin,"warden");

export const warden = mongoose.model('Warden', wardenSchema);
