
import { useQueries, useQuery } from '@tanstack/react-query'
import { getData } from '../api/productApi'

export const useapiProductData=()=>{
    const{data,isPending}=useQuery({
    queryKey:['products'],
    queryFn:getData,
    staleTime:5000
    
})
 return {data,isPending}
}