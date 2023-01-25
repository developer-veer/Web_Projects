import multer from "multer";
import { HostelModel } from "../Model/HostelModel.js";

//specify DiskStorage
const Storage = multer.diskStorage({
    
    destination:(req , res , cb)=>{

        cb(null,"./Images");
    },
    filename:(req , file , cb) => 
    {
        cb(null , `${file.originalname}`);
    }
});

export const upload = multer({
    storage:Storage,
}).single('Image');


export  const addhostelCont = async(req, res) => 
{
    
    const hostleModel = new HostelModel({
        
        HostelName:req.body.HostelName,
        NumberOfRooms : req.body.NumOfRooms,
        Disc : req.body.Disc,
        Image :req.file.path,
        Address: req.body.Address 

    });

    try {
         
       await hostleModel.save();
       console.log("Successfully Added data");


    } catch (error) {
        console.log("Somthing Wrong");
    }
   
      
}