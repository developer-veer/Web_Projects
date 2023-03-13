import {warden} from  "../Model/WardenCollection.js";



// var result;
export const LoginContr =async (req , res ) => 
{

    const athen = req.body.userName + req.body.Password;

    console.log(athen + ":-");

 const   result  =await warden.findOne({auth:athen});
    
   console.log(result);

   if(result !== null)
   {
    res.send(result);
   }else{
      console.log("Not matche");
   }
  
}


export const GetDataAuth=async (req,res)=>{

    console.log("----?? ----+result" + result);
    await   res.json(result);

}