import axios from "axios";

const url = "http://localhost:5000";

export const register = async (userData) => 
{
    return  await axios.post(`${url}/register` , userData);
}

//
export const getRegister = async () => {
    
    return await axios.get(`${url}/customer`);
}

export const deleteDoc =async (id) => 
{

  return  await axios.delete(`${url}/customer/${id}`);

}