import { axiosInstanceApi } from "../config/axiosInstance";

  export const getData=async()=>{
        try {
            const res=await axiosInstanceApi("/products")
            console.log(res.data);
            return res.data
            
            
        } catch (error) {
            console.log(error);
            
            
        }
    }
