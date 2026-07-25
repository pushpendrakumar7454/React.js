
import axios from 'axios'


export const getData=async()=>{
    let res= await axios.get("https://dummyjson.com/products",{
        params:{

        },
        headers:{
            
        }
    })

}