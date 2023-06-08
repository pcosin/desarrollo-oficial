import axios from "axios";

export const axiosClient = axios.create({
    baseURL: './src/db/trabajos.json'
})