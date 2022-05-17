import axios from "axios";

export const ApiRequestService = axios.create({
    baseURL: "https://reqres.in/api"
});