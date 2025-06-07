import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:8000/api/",
    headers:{
        "Content-Type":"application/json"
    }
});

/*
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token && token.startsWith("Bearer"))  config.headers.Authorization=`Bearer ${token}`; 
    return config;
},(error) => {
    return Promise.reject(error);
})*/