
import axios from 'axios'
import { setError, setLoading, setProduct } from './productSlice'


export const getData=()=>async (dispatch)=>{
    try {
        dispatch(setLoading())
        
        let res= await axios.get("https://fakestoreapi.com/products")
        dispatch(setProduct(res.data))
        
    } catch (error) {
        dispatch(setError(error.message))
    }

}