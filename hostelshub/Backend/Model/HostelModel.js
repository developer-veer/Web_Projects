import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);
const HostelSchema = mongoose.Schema({

    HostelName:String ,
    NumberOfRooms : Number ,
    Disc : String ,
    Image :String,
    Address: String

});

HostelSchema.plugin(autoIncrement.plugin , "Hostel");

export const HostelModel = mongoose.model("Hostel" , HostelSchema);