import axios from 'axios'

export const axiosIntance=axios.create({
    baseURL:"https://fakestoreapi.com"
})


axiosIntance.interceptors.response.use(
    (response)=>{
        return (response);
        
    },
    (error)=>{
        return error
    }
)