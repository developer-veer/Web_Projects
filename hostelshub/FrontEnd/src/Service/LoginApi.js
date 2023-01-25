import axios from "axios";

const url = "http://localhost:5000";

export const Auth =async (userData) => 
{
    return  await  axios.post(`${url}/login`,userData);
} 

export const AuthGet =async (data) => 
{
    return  await  axios.get(`${url}/login/${data}`);
} 