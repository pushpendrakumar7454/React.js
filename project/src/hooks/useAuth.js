import { useNavigate } from "react-router"
import { useForm} from "react-hook-form"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../features/auth/authSlice"

export const useAuth=()=>{
    const navigate=useNavigate()
     const dispatch=useDispatch()
    const {register,reset,handleSubmit,watch,formState:{errors}}=useForm()
    const [registerUser, setRegisterUser] = useState(()=>{
        return JSON.parse(localStorage.getItem("registerUser"))||[]
    })

    const registerForm=(data)=>{
        console.log(data);
        const arr=[...registerUser,data]
        setRegisterUser(arr)
        localStorage.setItem('registerUser',JSON.stringify(arr))
        alert(("regisrtation succes"))
        navigate('/login')
        
    }
    const loginForm=(data)=>{
        const exist=registerUser.find((u)=>u.email===data.email && u.password==data.password)
        if(exist){
            alert("login susses")
            localStorage.setItem("loggedinUser",JSON.stringify(exist))
            navigate('/')
            dispatch(addUser(exist))
            
        }else{
            alert("invalid user")
        }
        
    }
     


    return {
        navigate,
        register,handleSubmit,watch,registerForm,loginForm
    }
}