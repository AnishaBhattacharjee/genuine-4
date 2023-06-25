import axios from "axios";

const BaseUrl="http://127.0.0.1:3002"

export const getAbout=async()=>{
    try {
        return await axios.get(`${BaseUrl}/about`)
    }
    catch (error) {
        console.log("Error while fetching data from the Api", error.message);
    }
}

export const getTrainerDetails= async()=>{
    try{
        return await axios.get(`${BaseUrl}/users`)
    }
    catch(error){
        console.log("error while calling data",error.message);
    }
}