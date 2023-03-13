import axios from "axios";

//const url = "http://localhost:5000";

export const signUp = async (data) => {
    return await axios.post(`${url}/signup`, data);
}

// export const register = async (R_data) => {
//     return await axios.post(`${url}/register`, R_data);
// }

