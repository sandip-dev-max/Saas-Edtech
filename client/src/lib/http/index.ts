import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api",
    headers : {
        "content-type" : "application/json",         //  format of the data is content type
        "Accept" : "application/json" //  what type of data we want to receive
    }
})

export default api;
