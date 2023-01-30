import axios from "axios";

const apiClient = axios.create({baseURL:'http://localhost:5555/api'});

const create = async(url,data)=>{
    const response = await apiClient.post(url,data);
    return response.data;
}

const fetch = async(url)=>{
    const response = await apiClient.get(url);
    return response.data;
}

const update = async(url,data)=>{
    const response = await apiClient.put(url,data);
    return response.data;
}

const destroy = async(url)=>{
    const response = await apiClient.delete(url);
    return response.data;
}

export { fetch, update, destroy,create };