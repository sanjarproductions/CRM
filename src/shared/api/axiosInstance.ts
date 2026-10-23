import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://213.171.12.144/crm-api/api"
})