import mongoose from "mongoose";
import autoincrement from "mongoose-auto-increment";
autoincrement.initialize(mongoose.connection);
const studentSchema = new mongoose.Schema({
    
    fullName: String,
    Email:String,
    CNIC : String ,
    Age : Number ,
    Address: String ,
    
    
  });

studentSchema.plugin(autoincrement.plugin,"Student");

export const studentModel = mongoose.model('Student',  studentSchema);