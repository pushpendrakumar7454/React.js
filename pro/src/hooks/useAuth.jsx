import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { addUser } from "../features/auth/authSlice"
import {useDispatch} from 'react-redux'

export const useAuth=()=>{

    const navigate=useNavigate()
    const dispatch = useDispatch()
    const [regisiterUser, setregisiterUser] = useState(()=>{
      return JSON.parse(localStorage.getItem('registerUser'))||[]
    })
      const{handleSubmit,reset,register,formState:{errors},watch}= useForm()


      const registerForm=(data)=>{
        let arr=[...regisiterUser,data]
          setregisiterUser(arr)
          localStorage.setItem("registerUser",JSON.stringify(arr))
          dispatch(addUser(arr))
          navigate("/login")
          alert("registration succes")
        
      }

      const loginForm=(data)=>{
        const user=regisiterUser.find((u)=>u.email===data.email && u.password===data.password)
        if(user){
          localStorage.setItem("loggedUser",JSON.stringify(user))
          alert("login succes")
          
          navigate("/")
        }else{
          alert("invliad cretencial")
          return 
        }

      }



    return {navigate,registerForm,handleSubmit,register,errors,watch,loginForm,dispatch}
}