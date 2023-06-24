import axios from "axios";

const ApiUrl="http://127.0.0.1:3002/about"

export const getAbout=async()=>{
    try {
        return await axios.get(ApiUrl)
    }
    catch (error) {
        console.log("Error while fetching data from the Api", error.message);
    }
}