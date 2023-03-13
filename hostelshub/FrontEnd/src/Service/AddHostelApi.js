import axios from "axios";

const url = "http://localhost:5000";

export const addHostelApi =async (data) =>
{

    return await axios.post(`${url}/customer/AddHostel`,data);

}

export const getHostelDataApi =async () => 
{
    return await axios.get(`${url}/customer/dashboard`);
}