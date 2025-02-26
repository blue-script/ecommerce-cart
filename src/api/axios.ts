import axios, { CreateAxiosDefaults} from 'axios'
import {API_URL} from "@/constants";
import {getContentType} from "@/api/api.helper";

const axiosOptions: CreateAxiosDefaults = {
    baseURL: API_URL,
    headers: getContentType(),
    withCredentials: true
}

export const axiosClassic = axios.create(axiosOptions)

export const instance = axios.create(axiosOptions)

instance.interceptors.request.use(config => {

})