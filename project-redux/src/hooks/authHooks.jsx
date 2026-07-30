import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react"

export const useAuth = () => {

    const navigate = useNavigate()
    const [registerUser, setRegisterUser] = useState([])

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm()

    const registerSubmit = (data) => {
        let arr=[...registerUser,data]
       setRegisterUser(arr)
       localStorage.setItem('registerUser',JSON.stringify(arr))
    }

    const loginFrom=(data)=>{
        console.log(data);
        
    }


    return {
        navigate,
        register,
        handleSubmit,
        watch,
        errors,
        registerSubmit,
        loginFrom
    }
}