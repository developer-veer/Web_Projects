//import { getRegister } from "../../FrontEnd/src/Service/regApi.js";
import { warden } from "../Model/WardenCollection.js";
//import { studentModel } from "../Model/StudentModel.js";
export const postRegisterReq = async (req , res)=>{

    const fname =  req.body.fullname;
    const email = req.body.email;
    const password = req.body.Password;
    const confirm_Password_ = req.body.confirm_Password;
    const address =  req.body.address;
    const age = req.body.age;
    
    const newWarden = new warden({

        fullName :fname ,
        Email : email,
        Age : age, 
       Password : password,
       ConfirmPassword:confirm_Password_,
        Address :address,
       
        auth:email+password,

    });

    try {
        await newWarden.save();
        res.status(200).send("Data is successfully save in database");
    } catch (error) {
        console.log(error);
    }
}

export const getRegister = async (req , res) => {
     
    try {
        
        const regData = await warden.find();
        res.json(regData);

    } catch (error) {
        
        console.log("there is no data...");
    }
}

export const deleteDocPro =async (req , res) => 
{
    try {
        
    const wardenDoc = await warden.deleteOne({_id:req.params.id});
    res.json(wardenDoc);

    } catch (error) {
        
        res.jason("there is somthing wrong");
    }
}