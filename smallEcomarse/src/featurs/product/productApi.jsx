import {serError,setLoadiing,setProduct} from './productSlice'
import axios from 'axios'


export const getData=()=>async(dispatch)=>{
    try {
        dispatch(setLoadiing())
        const res=await axios.get("https://fakestoreapi.com/products")
        dispatch(setProduct(res.data))
        
        
    } catch (error) {
        dispatch(serError(error.message))
    }

}