import axios from "axios";

export const renderConfigurationFieldsServ = async () => {
   const response = await axios.get(`${"usernote/api/getUser,2"}`, 
    { headers: { 'Content-Type': 'application/json'}}) 
    console.log("response",response)
    return response?.data;

}
